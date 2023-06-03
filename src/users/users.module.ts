import { Module } from '@nestjs/common';
import { TechnicalsController } from './controllers/technicals.controller';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { TechnicalsService } from './services/technicals.service';
import { FaultsModule } from '../ppus/faults/faults.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/users.entity';
import { Technical, TechnicalSchema } from './entities/technical.entity';

@Module({
  imports: [
    FaultsModule,
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: Technical.name,
        schema: TechnicalSchema,
      },
    ]),
  ],
  controllers: [UsersController, TechnicalsController],
  providers: [UsersService, TechnicalsService],
})
export class UsersModule {}
