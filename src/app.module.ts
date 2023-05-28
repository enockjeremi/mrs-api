import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PpusModule } from './ppus/ppus.module';

@Module({
  imports: [UsersModule, PpusModule],
})
export class AppModule {}
