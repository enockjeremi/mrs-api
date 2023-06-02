import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  CreateCategoryDto,
  UpdateCategoryDto,
} from 'src/ppus/faults/DTOS/categories.dto';
import { CategoriesService } from '../services/categories.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private services: CategoriesService) {}

  @Get()
  get() {
    return this.services.findAll();
  }
  @Post()
  create(@Body() payload: CreateCategoryDto) {
    return this.services.create(payload);
  }
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.services.findOne(id);
  }
  @Put(':id')
  update(@Body() payload: UpdateCategoryDto, @Param('id') id: string) {
    return this.services.update(id, payload);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.services.delete(id);
  }
}
