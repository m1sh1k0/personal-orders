import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Logger } from 'src/monitoring/logger';

@Module({
  controllers: [UserController],
  providers: [UserService, Logger],
})
export class UserModule {}
