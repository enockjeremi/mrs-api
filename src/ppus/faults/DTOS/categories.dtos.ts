import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  readonly category: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
