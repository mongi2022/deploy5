import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Module({
  
  imports: [TypeOrmModule.forFeature([User])]  ,
  
  controllers: [UsersController],
  providers: [UsersService,ConfigService],
  exports: [UsersService],
})
export class UsersModule {}
