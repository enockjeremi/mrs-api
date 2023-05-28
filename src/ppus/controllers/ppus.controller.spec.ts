import { Test, TestingModule } from '@nestjs/testing';
import { PpusController } from './ppus.controller';

describe('PpusController', () => {
  let controller: PpusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpusController],
    }).compile();

    controller = module.get<PpusController>(PpusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
