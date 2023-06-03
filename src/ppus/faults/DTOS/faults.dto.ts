import { PartialType } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsPositive,
  IsOptional,
  Min,
  IsMongoId,
} from 'class-validator';

export class CreateFaultDto {
  @IsNotEmpty()
  @IsString()
  readonly fault: string;

  @IsNotEmpty()
  @IsString()
  readonly symptoms: string;

  @IsNotEmpty()
  @IsString()
  readonly diagnosis: string;

  @IsNotEmpty()
  @IsString()
  readonly solution: string;

  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  readonly kmCurrent: number;

  @IsNotEmpty()
  @IsMongoId()
  readonly category: string;
}

export class UpdateFaultDto extends PartialType(CreateFaultDto) {}

export class FilterFaultDto {
  @IsOptional()
  @IsPositive()
  limit: number;

  @IsOptional()
  @Min(0)
  offset: number;
}
