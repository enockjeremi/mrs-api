import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePPUDto, FilterPPUDto, UpdatePPUDto } from '../DTOS/ppus.dto';
import { PPU } from 'src/ppus/entities/ppu.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PpusService {
  constructor(@InjectModel(PPU.name) private ppuModel: Model<PPU>) {}

  async create(payload: CreatePPUDto) {
    const ppu = payload.ppu;
    const findPPU = await this.ppuModel.find({ ppu }).exec();
    if (findPPU.length > 0)
      throw new BadRequestException('PPU must be unique!');
    const newPpu = new this.ppuModel(payload);
    return await newPpu.save();
  }

  async findAll(params?: FilterPPUDto) {
    if (params) {
      const { ppu } = params;
      if (ppu) {
        return await this.ppuModel.find({ ppu }).exec();
      }
    }
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
