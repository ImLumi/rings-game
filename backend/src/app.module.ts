import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthService } from './auth/auth.service';
import { GameModule } from './game/game.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, GameModule],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
