import { Body, Controller, Post } from '@nestjs/common';
import { SessionService } from './session.service';
import { CreateGameSessionDto } from './dto/create-game-session.dto';
import { GameService } from '../game.service';

@Controller('session')
export class SessionController {
  constructor(
    private readonly sessionService: SessionService,
    private readonly gameService: GameService,
  ) {}

  @Post()
  async create(@Body() createSessionDto: CreateGameSessionDto) {
    const room = await this.gameService.createRoom(createSessionDto);
    const players = room.getPlayers();

    return {
      id: room.id,
      inviteCodes: players.map((player, idx) => ({
        playerId: player.id,
        playerName: player.name,
        inviteCode: room.id + String(idx),
      })),
    };
  }
}
