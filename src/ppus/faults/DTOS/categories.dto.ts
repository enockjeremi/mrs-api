import { PartialType } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  readonly category: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
