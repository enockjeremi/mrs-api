/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
import { CreatePPUDto, UpdatePPUDto } from './../DTOS/ppus.dtos';
import { PpusService } from 'src/ppus/services/ppus.service';

@Controller('ppus')
export class PpusController {
  constructor(private services: PpusService) { }

  @Get()
  get() {
    const response = this.services.findAll();
    return { method: 'GET', data: response };
  }
  @Post()
  create(@Body() payload: CreatePPUDto) {
    const newPpu = this.services.create(payload);
    return { method: 'POST', newPpu };
  }
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    const response = this.services.findOne(id);
    return { method: 'GET ID', data: response };
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdatePPUDto) {
    const updatePpu = this.services.update(+id, payload);
    return { method: 'PUT', id, updatePpu };
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    const deletePpu = this.services.delete(+id);
    return { method: 'DELETE', id, deletePpu };
  }
}
