import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/DTOS/categories.dtos';
import { CategoriesService } from 'src/services/categories/categories.service';

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
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.services.findOne(id);
  }
  @Put(':id')
  update(
    @Body() payload: UpdateCategoryDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.services.update(id, payload);
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.services.delete(id);
  }
}
