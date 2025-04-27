import { Injectable } from '@nestjs/common';
import { GameRoom, Guess } from './state/game.state';
import { PrismaService } from 'src/prisma.service';
import { Server } from 'socket.io';
import { CreateGameSessionDto } from './session/dto/create-game-session.dto';

@Injectable()
export class GameService {
  private readonly startTimestamp = Date.now();
  private rooms = new Map<string, GameRoom>();
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
    this.rooms.set(roomId, room);
    return room;
  }

  getRoom(roomId: string) {
    const room = this.rooms.get(roomId);
    if (!room) throw new Error('Room not found');
    return room;
  }

  startGame(roomId: string, server: Server) {
    const room = this.rooms.get(roomId);
    if (!room) throw new Error('Room not found');
    room.start(server);
  }

  nextTurn(roomId: string) {
    const room = this.rooms.get(roomId);
    if (!room) throw new Error('Room not found');
    room.startTurn();
  }

  checkGuess(roomId: string) {
    const room = this.rooms.get(roomId);
    if (!room) throw new Error('Room not found');
    room.checkGuess();
  }

  stealTurn(roomId: string) {
    const room = this.rooms.get(roomId);
    if (!room) throw new Error('Room not found');
    room.stealTurn();
  }

  guessing(roomId: string, guess: Guess, playerId: string) {
    const room = this.rooms.get(roomId);
    if (!room) throw new Error('Room not found');
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
