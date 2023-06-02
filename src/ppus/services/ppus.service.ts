import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePPUDto, UpdatePPUDto } from '../DTOS/ppus.dto';
import { PPU } from 'src/ppus/entities/ppu.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PpusService {
  constructor(@InjectModel(PPU.name) private ppuModel: Model<PPU>) {}

  async create(payload: CreatePPUDto) {
    try {
      const newPpu = await new this.ppuModel(payload);
      return await newPpu.save();
    } catch (error) {
      throw new BadRequestException('PPU must be unique.');
    }
  }

  async findAll() {
    return await this.ppuModel.find({}).exec();
  }

  async findOne(id: string): Promise<PPU> {
    const ppu = await this.ppuModel.findById({ _id: id }).exec();
    if (!ppu) {
      throw new NotFoundException('PPU not found.');
    }
    return ppu;
  }

  async update(id: string, payload: UpdatePPUDto) {
    const ppu = await this.ppuModel
      .findByIdAndUpdate({ _id: id }, { $set: payload }, { new: true })
      .exec();
    if (!ppu) {
      throw new NotFoundException('PPU not found.');
    }
    return ppu;
  }
  async delete(id: string) {
    const ppu = await this.findOne(id);
    if (!ppu) {
      throw new NotFoundException('PPU not found.');
    }
    return await this.ppuModel.findByIdAndDelete({ _id: id }).exec();
  }
}
