import { PartialType } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsPositive,
  IsOptional,
} from 'class-validator';

export class CreatePPUDto {
  @IsNotEmpty()
  @IsString()
  readonly ppu: string;

  @IsNotEmpty()
  @IsString()
  readonly brand: string;

  @IsNotEmpty()
  @IsString()
  readonly model: string;

  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  readonly year: number;

  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  readonly kmInit: number;
}

export class UpdatePPUDto extends PartialType(CreatePPUDto) {}

export class FilterPPUDto {
  @IsOptional()
  ppu: string;
}
