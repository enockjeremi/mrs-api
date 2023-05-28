import { Test, TestingModule } from '@nestjs/testing';
import { PpusService } from './ppus.service';

describe('PpusService', () => {
  let service: PpusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpusService],
    }).compile();

    service = module.get<PpusService>(PpusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
