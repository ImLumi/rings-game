import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { SessionController } from './session.controller';
import { SessionGateway } from './session.gateway';
import { PrismaService } from 'src/prisma.service';
import { GameService } from '../game.service';

@Module({
  controllers: [SessionController],
  providers: [SessionService, SessionGateway, PrismaService, GameService],
})
export class SessionModule {}
