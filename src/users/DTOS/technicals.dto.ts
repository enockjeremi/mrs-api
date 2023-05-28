import { PartialType } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty, IsPositive } from 'class-validator';

export class CreateTechnicalDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly lastName: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly age: number;
}

export class UpdateTechnicalDto extends PartialType(CreateTechnicalDto) {}
