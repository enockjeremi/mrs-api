import { PartialType } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty, IsPositive } from 'class-validator';

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
}

export class UpdateFaultDto extends PartialType(CreateFaultDto) {}
