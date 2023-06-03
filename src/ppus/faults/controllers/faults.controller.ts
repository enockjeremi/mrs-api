import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  CreateFaultDto,
  FilterFaultDto,
  UpdateFaultDto,
} from '../../faults/DTOS/faults.dto';
import { FaultsService } from '../services/faults.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Faults')
@Controller('faults')
export class FaultsController {
  constructor(private services: FaultsService) {}

  @Get()
  get(@Query() params: FilterFaultDto) {
    return this.services.findAll(params);
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
