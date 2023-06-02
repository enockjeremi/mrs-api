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
  CreateTechnicalDto,
  UpdateTechnicalDto,
} from 'src/users/DTOS/technicals.dto';
import { TechnicalsService } from './../services/technicals.service';
import { ApiTags } from '@nestjs/swagger';
import { MongoIdPipe } from 'src/common/mongo-id/mongo-id.pipe';

@ApiTags('Technical')
@Controller('technical')
export class TechnicalsController {
  constructor(private technicalServices: TechnicalsService) {}

  @Get()
  get() {
    return this.technicalServices.findAll();
  }
  @Post()
  create(@Body() payload: CreateTechnicalDto) {
    return this.technicalServices.create(payload);
  }
  @Get(':id')
  getOne(@Param('id', MongoIdPipe) id: string) {
    return this.technicalServices.findOne(id);
  }
  @Put(':id')
  update(
    @Body() payload: UpdateTechnicalDto,
    @Param('id', MongoIdPipe) id: string,
  ) {
    return this.technicalServices.update(id, payload);
  }
  @Delete(':id')
  delete(@Param('id', MongoIdPipe) id: string) {
    return this.technicalServices.delete(id);
  }
}
