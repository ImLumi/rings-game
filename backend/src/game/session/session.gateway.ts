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
import { Guess, GuessDto } from '../state/game.state';

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

  @SubscribeMessage('admin')
  async handleAdminJoin(
    @MessageBody() data: { roomId: string; action?: string },
    @ConnectedSocket() client: Socket,
  ) {
    const roomId = data.roomId;
    const action = data.action;
    const { room } = this.gameService.getRoom(String(roomId));
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

  @SubscribeMessage('admin-room-status')
  handleAdminRoomStatus(
    @MessageBody() roomId: string,
    @ConnectedSocket() client: Socket,
  ) {
    const { room, connectedPlayers } = this.gameService.getRoom(String(roomId));
    if (!room) throw new WsException('Invalid room ID');

    const players = room.getPlayers();
    client.emit('admin-room-status', {
      connectedPlayers: Array.from(connectedPlayers.values()),
      inviteCodes: players.map((player, idx) => ({
        playerId: player.id,
        playerName: player.name,
        inviteCode: room.id + String(idx),
      })),
    });
  }

  @SubscribeMessage('join')
  async handleJoin(
    @MessageBody() inviteCode: string,
    @ConnectedSocket() client: Socket,
  ) {
    const { player, roomId } = this.gameService.joinPlayer(
      client.id,
      inviteCode,
    );
    await client.join(roomId);
    client.emit('joined', {
      id: player.id,
      name: player.name,
      roomId: roomId,
    });
    this.logger.log(
      `WSClient/playerId ${client.id} / ${player.id} joined room ${roomId}`,
    );
  }

  // @SubscribeMessage('message')
  // handleMessage(@MessageBody() data) {
  //   const roomId = data.roomId;
  //   const message = data.message;
  //   this.server.to(roomId).emit(data.event, message);
  //   return { message: 'Hello from the server!' };
  // }

  @SubscribeMessage('guessing')
  handleguessing(
    @MessageBody() data: { id: string; guess: GuessDto },
    @ConnectedSocket() client: Socket,
  ) {
    const playerId = data.id;
    const rooms = Array.from(client.rooms).filter((room) => room !== client.id);
    const roomId = rooms[0];
    this.gameService.guessing(roomId, data.guess, playerId);
    this.logger.debug(
      `WSClient/playerId ${client.id} / ${playerId} guessed ${data.guess.x} ${data.guess.y}`,
    );
    return { message: 'successful guessing' };
  }
}
