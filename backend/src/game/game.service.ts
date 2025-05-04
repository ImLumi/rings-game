import { Injectable } from '@nestjs/common';
import { GameRoom, Guess } from './state/game.state';
import { PrismaService } from 'src/prisma.service';
import { Server } from 'socket.io';
import { CreateGameSessionDto } from './session/dto/create-game-session.dto';

type Room = {
  room: GameRoom;
  connectedPlayers: Map<string, string>;
};

@Injectable()
export class GameService {
  private readonly startTimestamp = Date.now();
  private rooms = new Map<string, Room>();
  constructor(private readonly prisma: PrismaService) {}

  async createRoom(createGameSessionDto: CreateGameSessionDto) {
    const roomId = String(Date.now() - this.startTimestamp);
    const room = new GameRoom(roomId);

    const players = await this.prisma.user.findMany({
      where: {
        id: { in: createGameSessionDto.players },
      },
    });
    if (players.length !== createGameSessionDto.players.length) {
      throw new Error('Some players not found');
    }

    const puzzles = await this.prisma.puzzle.findMany({
      where: {
        id: { in: createGameSessionDto.puzzles },
      },
    });
    if (puzzles.length !== createGameSessionDto.puzzles.length) {
      throw new Error('Some puzzles not found');
    }

    room.setPuzzles(puzzles);
    room.addPlayers(players);
    this.rooms.set(roomId, { room, connectedPlayers: new Map() });
    return room;
  }

  getRoom(roomId: string) {
    const roomObj = this.rooms.get(roomId);
    if (!roomObj) throw new Error('Room not found');
    return roomObj;
  }

  startGame(roomId: string, server: Server) {
    const roomObj = this.rooms.get(roomId);
    if (!roomObj) throw new Error('Room not found');
    const { room, connectedPlayers } = roomObj;
    if (connectedPlayers.size < 2) throw new Error('Not enough players');
    room.start(server);
  }

  nextTurn(roomId: string) {
    const roomObj = this.rooms.get(roomId);
    if (!roomObj) throw new Error('Room not found');
    const { room } = roomObj;
    room.startTurn();
  }

  checkGuess(roomId: string) {
    const roomObj = this.rooms.get(roomId);
    if (!roomObj) throw new Error('Room not found');
    const { room } = roomObj;
    room.checkGuess();
  }

  stealTurn(roomId: string) {
    const roomObj = this.rooms.get(roomId);
    if (!roomObj) throw new Error('Room not found');
    const { room } = roomObj;
    room.stealTurn();
  }

  joinPlayer(clientId: string, inviteCode: string) {
    const roomId = inviteCode.slice(0, -1);
    const roomObj = this.rooms.get(roomId);
    if (!roomObj) throw new Error('Room not found');
    const { room, connectedPlayers } = roomObj;

    const players = room.getPlayers();
    const playerIdx = inviteCode.slice(-1);
    const player = players[Number(playerIdx)];

    if (!player) throw new Error('Player not found');

    if (connectedPlayers.has(clientId))
      throw new Error('Client already connected');

    connectedPlayers.set(clientId, player.id);

    return { player, roomId };
  }

  guessing(roomId: string, guess: Guess, playerId: string) {
    const roomObj = this.rooms.get(roomId);
    if (!roomObj) throw new Error('Room not found');
    const { room } = roomObj;
    const player = room.getActualPlayer();
    if (!room.isStealTurn()) {
      if (player.id !== playerId) {
        throw new Error('Not your turn');
      }
      room.guessing(guess);
    } else {
      if (player.id === playerId) {
        throw new Error('Not your turn');
      }
      room.guessing(guess);
    }
  }
}
