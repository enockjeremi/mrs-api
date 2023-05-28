import { Module } from '@nestjs/common';
import { TechnicalsController } from './controllers/technicals.controller';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { TechnicalsService } from './services/technicals.service';

@Module({
  controllers: [UsersController, TechnicalsController],
  providers: [UsersService, TechnicalsService],
})
export class UsersModule {}
