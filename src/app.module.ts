import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { EmailModule } from './email/email.module';
import { FileWatcherModule } from './file-watcher/file-watcher.module';
import { LogsModule } from './logs/logs.module';

@Module({
  imports: [PrismaModule, EmailModule, FileWatcherModule, LogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
