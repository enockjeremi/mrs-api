/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreatePPUDto, FilterPPUDto, UpdatePPUDto } from '../DTOS/ppus.dto';
import { PpusService } from 'src/ppus/services/ppus.service';
import { ApiTags } from '@nestjs/swagger';
import { MongoIdPipe } from 'src/common/mongo-id/mongo-id.pipe';

@ApiTags('PPUS')
@Controller('ppus')
export class PpusController {
  constructor(private services: PpusService) { }

  @Get()
  get(@Query() params: FilterPPUDto) {
    return this.services.findAll(params);
  }
  @Post()
  create(@Body() payload: CreatePPUDto) {
    const newPpu = this.services.create(payload);
    return newPpu;
  }
  @Get(':id')
  getOne(@Param('id', MongoIdPipe) id: string) {
    const getPpu = this.services.findOne(id);
    return getPpu;
  }
  @Put(':id')
  update(@Param('id', MongoIdPipe) id: string, @Body() payload: UpdatePPUDto) {
    const putPPU = this.services.update(id, payload);
    return putPPU;
  }
  @Delete(':id')
  delete(@Param('id', MongoIdPipe) id: string) {
    return this.services.delete(id);
  }
}
