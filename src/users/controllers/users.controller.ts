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
import { CreateUserDto, UpdateUserDto } from 'src/users/DTOS/users.dtos';
import { UsersService } from './../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private services: UsersService) {}

  @Get()
  get() {
    return this.services.findAll();
  }
  @Post()
  create(@Body() payload: CreateUserDto) {
    return this.services.create(payload);
  }
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.services.findOne(id);
  }
  @Put(':id')
  update(
    @Body() payload: UpdateUserDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.services.update(id, payload);
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.services.delete(id);
  }
}
