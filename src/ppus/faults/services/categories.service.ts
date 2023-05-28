import { Injectable } from '@nestjs/common';
import {
  CreateCategoryDto,
  UpdateCategoryDto,
} from './../DTOS/categories.dtos';

@Injectable()
export class CategoriesService {
  create(payload: CreateCategoryDto) {
    return payload;
  }

  findAll() {
    return true;
  }

  findOne(id: number) {
    return id;
  }

  update(id: number, payload: UpdateCategoryDto) {
    return { id, payload };
  }

  delete(id: number) {
    return id;
  }
}
