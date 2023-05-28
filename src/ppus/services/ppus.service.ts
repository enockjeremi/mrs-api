import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePPUDto, UpdatePPUDto } from '../DTOS/ppus.dtos';
import { PPU } from 'src/ppus/entities/ppu.entity';

@Injectable()
export class PpusService {
  private counterId = 4;
  private ppus: PPU[] = [
    {
      id: 1,
      ppu: 'XXWW20',
      brand: 'Hyundai',
      model: 'Santa Fe',
      year: 2012,
      kmInit: 143580,
    },
    {
      id: 2,
      ppu: 'MNSL12',
      brand: 'Hyundai',
      model: 'Tucson',
      year: 2012,
      kmInit: 143580,
    },
    {
      id: 3,
      ppu: 'WKLS30',
      brand: 'Hyundai',
      model: 'Veracruz',
      year: 2012,
      kmInit: 143580,
    },
  ];

  create(payload: CreatePPUDto) {
    console.log(payload);
    this.counterId = this.counterId + 1;
    const newPpu = {
      id: this.counterId,
      ...payload,
    };
    this.ppus.push(newPpu);
    return newPpu;
  }

  findAll() {
    return this.ppus;
  }

  findOne(id: number) {
    const ppu = this.ppus.find((ppu) => ppu.id == id);
    if (!ppu) {
      throw new NotFoundException('PPU not found.');
    }
    return ppu;
  }

  update(id: number, payload: UpdatePPUDto) {
    const item = this.findOne(id);
    if (item) {
      const index = this.ppus.findIndex((item) => item.id == id);
      this.ppus[index] = {
        ...item,
        ...payload,
      };
      return this.ppus[index];
    }
    return null;
  }
  delete(id: number) {
    const index = this.ppus.findIndex((item) => item.id == id);
    if (index == -1) {
      throw new NotFoundException('PPU not found.');
    }
    this.ppus.splice(index, 1);
    return true;
  }
}
