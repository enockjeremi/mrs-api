import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../DTOS/users.dto';
import { User } from '../entities/users.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(payload: CreateUserDto) {
    const email = payload.email;
    const findEmail = await this.userModel.find({ email }).exec();

    if (findEmail.length > 0)
      throw new BadRequestException('Email must be unique!');

    const newUser = new this.userModel(payload);
    return await newUser.save();
  }

  async findAll() {
    return await this.userModel.find({}).populate('technical').exec();
  }

  async findOne(id: string) {
    const oneUser = await this.userModel.findById({ _id: id }).exec();
    if (!oneUser) {
      throw new NotFoundException('Not Found!');
    }
    return oneUser;
  }

  async update(id: string, payload: UpdateUserDto) {
    const updateUser = await this.userModel
      .findByIdAndUpdate({ _id: id }, { $set: payload }, { new: true })
      .exec();
    if (!updateUser) {
      throw new NotFoundException('Not Found!');
    }
    return updateUser;
  }

  async delete(id: string) {
    const deleteUser = await this.findOne(id);
    if (!deleteUser) {
      throw new NotFoundException('User not found');
    }
    return await this.userModel.findByIdAndDelete({ _id: id }).exec();
  }
}
