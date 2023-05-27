import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { FaultsController } from './controller/faults/faults.controller';
import { PpusController } from './controller/ppus/ppus.controller';
import { UsersController } from './controller/users/users.controller';
import { CategoriesController } from './controller/categories/categories.controller';
import { TechnicalsController } from './controller/technicals/technicals.controller';
import { PpusService } from './services/ppus/ppus.service';
import { UsersService } from './services/users/users.service';
import { FaultsService } from './services/faults/faults.service';
import { CategoriesService } from './services/categories/categories.service';
import { TechnicalsService } from './services/technicals/technicals.service';

@Module({
  imports: [],
  controllers: [
    FaultsController,
    PpusController,
    UsersController,
    CategoriesController,
    TechnicalsController,
  ],
  providers: [
    AppService,
    PpusService,
    UsersService,
    FaultsService,
    CategoriesService,
    TechnicalsService,
  ],
})
export class AppModule {}
