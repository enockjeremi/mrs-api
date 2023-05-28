import { Test, TestingModule } from '@nestjs/testing';
import { TechnicalsService } from './technicals.service';

describe('TechnicalsService', () => {
  let service: TechnicalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechnicalsService],
    }).compile();

    service = module.get<TechnicalsService>(TechnicalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
