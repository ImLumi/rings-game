import { Logger } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsException,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { SessionService } from './session.service';
import { GameService } from '../game.service';

@WebSocketGateway({ cors: { origin: '*' } })
export class SessionGateway {
  constructor(
    private readonly sessionService: SessionService,
    private readonly gameService: GameService,
  ) {}
  private readonly logger = new Logger(SessionGateway.name, {
    timestamp: true,
  });
  @WebSocketServer()
  private readonly server: Server;

  @SubscribeMessage('adminjoin')
  async handleAdminJoin(
    @MessageBody() data,
    @ConnectedSocket() client: Socket,
  ) {
    const roomId = data.roomId;
    const action = data.action;
    const room = this.gameService.getRoom(String(roomId));
    if (!room) throw new WsException('Invalid room ID');
    await client.join(roomId);

    if (action === 'start') {
      this.gameService.startGame(roomId, this.server);
    }
    if (action === 'next') {
      this.gameService.nextTurn(roomId);
    }
    if (action === 'check') {
      this.gameService.checkGuess(roomId);
    }
    if (action === 'steal') {
      this.gameService.stealTurn(roomId);
    }
    this.logger.log(
      `WSClient ${client.id} joined room ${roomId} with action ${action}`,
    );
  }

  @SubscribeMessage('join')
  async handleJoin(
    @MessageBody() inviteCode: string,
    @ConnectedSocket() client: Socket,
  ) {
    this.logger.debug('inviteCode', inviteCode);
    const roomId = inviteCode.slice(0, -1);
    const room = this.gameService.getRoom(roomId);
    if (!room) throw new WsException('Invalid invite code');
    const players = room.getPlayers();
    const playerIdx = inviteCode.slice(-1);
    const player = players[Number(playerIdx)];
    if (!player) throw new WsException('Invalid invite code');
    await client.join(roomId);
    client.emit('joined', {
      id: player.id,
      name: player.name,
      roomId: roomId,
    });
    this.logger.log(
      `WSClient ${client.id} / ${player.id} joined room ${roomId}`,
    );
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data) {
    const roomId = data.roomId;
    const message = data.message;
    this.server.to(roomId).emit(data.event, message);
    return { message: 'Hello from the server!' };
  }

  @SubscribeMessage('guessing')
  handleguessing(@MessageBody() data, @ConnectedSocket() client: Socket) {
    const playerId = data.id;
    const rooms = Array.from(client.rooms).filter((room) => room !== client.id);
    const roomId = rooms[0];
    this.gameService.guessing(roomId, data.guess, playerId);
    return { message: 'successful guessing' };
  }

  // @SubscribeMessage('inc')
  // async inc(@MessageBody() data: number, @ConnectedSocket() client: Socket) {
  //   this.logger.log(
  //     `Incrementing counter: ${this.sessionService.incrementCounter()}`,
  //   );
  //   return data;
  // }
}
