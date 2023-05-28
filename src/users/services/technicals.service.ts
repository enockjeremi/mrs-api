import { Injectable } from '@nestjs/common';
import {
  CreateTechnicalDto,
  UpdateTechnicalDto,
} from './../DTOS/technicals.dtos';

@Injectable()
export class TechnicalsService {
  create(payload: CreateTechnicalDto) {
    return payload;
  }

  findAll() {
    return true;
  }

  findOne(id: number) {
    return id;
  }

  update(id: number, payload: UpdateTechnicalDto) {
    return { id, payload };
  }

  delete(id: number) {
    return id;
  }
}
