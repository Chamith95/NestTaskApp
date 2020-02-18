import { Test, TestingModule } from '@nestjs/testing';
import { Tasks1Service } from './tasks1.service';

describe('Tasks1Service', () => {
  let service: Tasks1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Tasks1Service],
    }).compile();

    service = module.get<Tasks1Service>(Tasks1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
