import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  CreateFaultDto,
  UpdateFaultDto,
} from 'src/ppus/faults/DTOS/faults.dto';
import { FaultsService } from '../services/faults.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Faults')
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
  getOne(@Param('id') id: string) {
    return this.services.findOne(id);
  }
  @Put(':id')
  update(@Body() payload: UpdateFaultDto, @Param('id') id: string) {
    return this.services.update(id, payload);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.services.delete(id);
  }
}
