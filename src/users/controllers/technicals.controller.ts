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
  CreateTechnicalDto,
  UpdateTechnicalDto,
} from 'src/users/DTOS/technicals.dtos';
import { TechnicalsService } from './../services/technicals.service';

@Controller('technical')
export class TechnicalsController {
  constructor(private services: TechnicalsService) {}

  @Get()
  get() {
    return this.services.findAll();
  }
  @Post()
  create(@Body() payload: CreateTechnicalDto) {
    return this.services.create(payload);
  }
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.services.findOne(id);
  }
  @Put(':id')
  update(
    @Body() payload: UpdateTechnicalDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.services.update(id, payload);
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.services.delete(id);
  }
}
