import { Module } from '@nestjs/common';
import { FaultsController } from './controllers/faults.controller';
import { CategoriesController } from './controllers/categories.controller';
import { FaultsService } from './services/faults.service';
import { CategoriesService } from './services/categories.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Fault, FaultSchema } from './entities/fault.entity';
import { Category, CategorySchema } from './entities/category.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Fault.name,
        schema: FaultSchema,
      },
      {
        name: Category.name,
        schema: CategorySchema,
      },
    ]),
  ],
  controllers: [FaultsController, CategoriesController],
  providers: [FaultsService, CategoriesService],
  exports: [FaultsService],
})
export class FaultsModule {}
