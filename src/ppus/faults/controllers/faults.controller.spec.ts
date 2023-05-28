import { Test, TestingModule } from '@nestjs/testing';
import { FaultsController } from './faults.controller';

describe('FaultsController', () => {
  let controller: FaultsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FaultsController],
    }).compile();

    controller = module.get<FaultsController>(FaultsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
