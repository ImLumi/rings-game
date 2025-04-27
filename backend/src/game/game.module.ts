import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { SessionModule } from './session/session.module';
import { PuzzleModule } from 'src/puzzle/puzzle.module';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [SessionModule, PuzzleModule],
  providers: [GameService, PrismaService],
})
export class GameModule {}
