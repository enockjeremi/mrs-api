import { Module } from '@nestjs/common';
import { FaultsController } from './controllers/faults.controller';
import { CategoriesController } from './controllers/categories.controller';
import { FaultsService } from './services/faults.service';
import { CategoriesService } from './services/categories.service';

@Module({
  controllers: [FaultsController, CategoriesController],
  providers: [FaultsService, CategoriesService],
  exports: [FaultsService],
})
export class FaultsModule {}
