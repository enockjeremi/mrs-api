import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFaultDto, UpdateFaultDto } from '../DTOS/faults.dto';
import { Fault } from '../entities/fault.entity';

@Injectable()
export class FaultsService {
  private counterId = 1;

  private faults: Fault[] = [
    {
      id: 1,
      fault: 'No enciende.',
      symptoms: 'Dejo de enecender de un momento a otro.',
      diagnosis: 'Problemas con el sensor CKP',
      solution: 'Cambiar el sensor CKP,',
      kmCurrent: 80300,
    },
  ];

  create(payload: CreateFaultDto) {
    return payload;
  }

  findAll() {
    return this.faults;
  }

  findOne(id: number) {
    const fault = this.faults.find((fault) => fault.id == id);
    if (!fault) {
      throw new NotFoundException('fault not found.');
    }
    return fault;
  }

  update(id: number, payload: UpdateFaultDto) {
    return { id, payload };
  }

  delete(id: number) {
    return id;
  }
}
