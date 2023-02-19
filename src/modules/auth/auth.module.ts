import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/modules/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AccessTokenStrategy } from './strategies/accessToken.strategy';
import { RefreshTokenStrategy } from './strategies/refreshToken.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/modules/users/entity/user.entity';
import { ConfigService } from '@nestjs/config';

@Module({

  imports: [TypeOrmModule.forFeature([User]),  
  JwtModule.register({ }),AuthModule,UsersModule,],
  controllers: [AuthController],
  providers: [AuthService, AccessTokenStrategy, RefreshTokenStrategy,ConfigService],
})
export class AuthModule {}
