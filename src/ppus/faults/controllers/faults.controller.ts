import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import {
  CreateFaultDto,
  UpdateFaultDto,
} from 'src/ppus/faults/DTOS/faults.dtos';
import { FaultsService } from '../services/faults.service';

@Controller('faults')
export class FaultsController {
  constructor(private services: FaultsService) {}

  @Get()
  get() {
    return this.services.findAll();
  }
  @Post()
  create(@Body() payload: CreateFaultDto) {
    return this.services.create(payload);
  }
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.services.findOne(id);
  }
  @Put(':id')
  update(
    @Body() payload: UpdateFaultDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.services.update(id, payload);
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.services.delete(id);
  }
}
