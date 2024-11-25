import { Test, TestingModule } from '@nestjs/testing';
import { FileWatcherService } from './file-watcher.service';

describe('FileWatcherService', () => {
  let service: FileWatcherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileWatcherService],
    }).compile();

    service = module.get<FileWatcherService>(FileWatcherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
