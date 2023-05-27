import { Injectable } from '@nestjs/common';
import { CreateFaultDto, UpdateFaultDto } from 'src/DTOS/faults.dtos';

@Injectable()
export class FaultsService {
  create(payload: CreateFaultDto) {
    return payload;
  }

  findAll() {
    return true;
  }

  findOne(id: number) {
    return id;
  }

  update(id: number, payload: UpdateFaultDto) {
    return { id, payload };
  }

  delete(id: number) {
    return id;
  }
}
