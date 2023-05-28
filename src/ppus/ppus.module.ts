import { Module } from '@nestjs/common';
import { FaultsModule } from './faults/faults.module';
import { PpusController } from './controllers/ppus.controller';
import { PpusService } from './services/ppus.service';

@Module({
  imports: [FaultsModule],
  controllers: [PpusController],
  providers: [PpusService],
})
export class PpusModule {}
