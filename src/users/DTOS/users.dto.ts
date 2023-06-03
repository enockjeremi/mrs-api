import { PartialType } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, IsMongoId } from 'class-validator';
import { Technical } from '../entities/technical.entity';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @IsNotEmpty()
  @IsString()
  readonly role: string;

  @IsNotEmpty()
  @IsMongoId()
  readonly technical: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
