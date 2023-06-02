import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTechnicalDto, UpdateTechnicalDto } from '../DTOS/technicals.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Technical } from '../entities/technical.entity';
import { Model } from 'mongoose';

@Injectable()
export class TechnicalsService {
  constructor(
    @InjectModel(Technical.name) private technicalModel: Model<Technical>,
  ) {}

  async create(payload: CreateTechnicalDto) {
    try {
      const newTechnical = new this.technicalModel(payload);
      return await newTechnical.save();
    } catch (error) {
      throw new NotFoundException('Not found');
    }
  }

  async findAll() {
    return await this.technicalModel.find({});
  }

  async findOne(id: string) {
    const oneTechnical = await this.technicalModel.findById({ _id: id }).exec();
    if (!oneTechnical) {
      throw new NotFoundException('Technical not Found.');
    }
    return oneTechnical;
  }

  async update(id: string, payload: UpdateTechnicalDto) {
    const updateTechnical = await this.technicalModel
      .findByIdAndUpdate({ _id: id }, { $set: payload }, { new: true })
      .exec();
    if (!updateTechnical) {
      throw new NotFoundException('Technical not Found.');
    }
    return updateTechnical;
  }

  async delete(id: string) {
    const deleteTechnical = await this.findOne(id);
    if (!deleteTechnical) {
      throw new NotFoundException('Technical not Found.');
    }
    return await this.technicalModel.findByIdAndDelete({ _id: id }).exec();
  }
}
