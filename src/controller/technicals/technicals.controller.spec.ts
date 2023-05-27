import { Test, TestingModule } from '@nestjs/testing';
import { TechnicalsController } from './technicals.controller';

describe('TechnicalController', () => {
  let controller: TechnicalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechnicalsController],
    }).compile();

    controller = module.get<TechnicalsController>(TechnicalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
