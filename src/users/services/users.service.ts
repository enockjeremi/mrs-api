import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../DTOS/users.dto';
import { Order } from '../entities/order.entity';
import { FaultsService } from 'src/ppus/faults/services/faults.service';
import { User } from '../entities/users.entity';

@Injectable()
export class UsersService {
  constructor(private faultsService: FaultsService) {}
  private counterId = 1;

  private users: User[] = [
    {
      id: 1,
      email: 'email@email.com',
      password: '123456',
      role: 'admin',
    },
  ];

  create(payload: CreateUserDto) {
    return payload;
  }
  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id == id);
    if (!user) {
      throw new NotFoundException('user not found.');
    }
    return user;
  }

  update(id: number, payload: UpdateUserDto) {
    return { id, payload };
  }

  delete(id: number) {
    return id;
  }

  getOrdersByUsers(id: number): Order {
    const user = this.findOne(id);
    return {
      date: new Date(),
      user: user,
      faults: this.faultsService.findAll(),
    };
  }
}
