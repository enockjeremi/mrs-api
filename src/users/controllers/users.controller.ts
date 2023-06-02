import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/users/DTOS/users.dto';
import { UsersService } from './../services/users.service';
import { ApiTags } from '@nestjs/swagger';
import { MongoIdPipe } from 'src/common/mongo-id/mongo-id.pipe';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userServices: UsersService) {}

  @Get()
  get() {
    return this.userServices.findAll();
  }
  @Post()
  create(@Body() payload: CreateUserDto) {
    return this.userServices.create(payload);
  }
  @Get(':id')
  getOne(@Param('id', MongoIdPipe) id: string) {
    return this.userServices.findOne(id);
  }
  @Put(':id')
  update(@Body() payload: UpdateUserDto, @Param('id', MongoIdPipe) id: string) {
    return this.userServices.update(id, payload);
  }
  @Delete(':id')
  delete(@Param('id', MongoIdPipe) id: string) {
    return this.userServices.delete(id);
  }
}
