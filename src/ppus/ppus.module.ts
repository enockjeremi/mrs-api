import { Module } from '@nestjs/common';
import { FaultsModule } from './faults/faults.module';
import { PpusController } from './controllers/ppus.controller';
import { PpusService } from './services/ppus.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PPU, PPUSchema } from './entities/ppu.entity';

@Module({
  imports: [
    FaultsModule,
    MongooseModule.forFeature([
      {
        name: PPU.name,
        schema: PPUSchema,
      },
    ]),
  ],
  controllers: [PpusController],
  providers: [PpusService],
})
export class PpusModule {}
