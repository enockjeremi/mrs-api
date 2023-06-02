import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFaultDto, UpdateFaultDto } from '../DTOS/faults.dto';
import { Fault } from '../entities/fault.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FaultsService {
  constructor(@InjectModel(Fault.name) private faultModel: Model<Fault>) {}

  async create(payload: CreateFaultDto) {
    try {
      const newFault = new this.faultModel(payload);
      return await newFault.save();
    } catch (error) {
      throw new NotFoundException('Error.');
    }
  }

  async findAll() {
    return await this.faultModel.find({}).exec();
  }

  async findOne(id: string) {
    const oneFault = await this.faultModel.findById({ _id: id }).exec();
    if (!oneFault) {
      throw new NotFoundException('Fault not found.');
    }
    return oneFault;
  }

  async update(id: string, payload: UpdateFaultDto) {
    const updateFault = await this.faultModel.findByIdAndUpdate(
      { _id: id },
      { $set: payload },
      { new: true },
    );
    if (!updateFault) {
      throw new NotFoundException('Fault not found.');
    }
    return updateFault;
  }

  async delete(id: string) {
    const deleteFault = await this.findOne(id);
    if (!deleteFault) {
      throw new NotFoundException('Fault not Found.');
    }
    return this.faultModel.findByIdAndDelete({ _id: id });
  }
}
