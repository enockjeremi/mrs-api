import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './../DTOS/users.dtos';

@Injectable()
export class UsersService {
  create(payload: CreateUserDto) {
    return payload;
  }
  findAll() {
    return true;
  }

  findOne(id: number) {
    return id;
  }

  update(id: number, payload: UpdateUserDto) {
    return { id, payload };
  }

  delete(id: number) {
    return id;
  }
}
