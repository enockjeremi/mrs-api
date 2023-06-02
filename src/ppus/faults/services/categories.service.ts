import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from '../DTOS/categories.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from '../entities/category.entity';
import { Model } from 'mongoose';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async create(payload: CreateCategoryDto) {
    const newCategory = new this.categoryModel(payload);
    return await newCategory.save();
  }

  async findAll() {
    const allCategories = await this.categoryModel.find({}).exec();
    return allCategories;
  }

  async findOne(id: string) {
    const oneCategory = await this.categoryModel.findById({ _id: id }).exec();
    if (!oneCategory) {
      throw new NotFoundException('Category not found.');
    }
    return oneCategory;
  }

  async update(id: string, payload: UpdateCategoryDto) {
    const updateCategory = await this.categoryModel
      .findByIdAndUpdate({ _id: id }, { $set: payload }, { new: true })
      .exec();
    if (!updateCategory) {
      throw new NotFoundException('Category not found.');
    }
    return updateCategory;
  }

  async delete(id: string) {
    const deleteCategory = await this.findOne(id);
    if (!deleteCategory) {
      throw new NotFoundException('Category not Found.');
    }
    return await this.categoryModel.findByIdAndDelete({ _id: id }).exec();
  }
}
