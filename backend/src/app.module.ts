import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SessionGateway } from './game/session/session.gateway';
import { GameService } from './game/game.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma.service';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [ConfigModule.forRoot(), UserModule],
  controllers: [AppController],
  providers: [
    AppService,
    SessionGateway,
    GameService,
    PrismaService,
    AuthService,
  ],
})
export class AppModule {}
