import { Module } from '@nestjs/common';
import { mymiddleware } from './task/task.module';

@Module({
  imports: [mymiddleware],
})
export class AppModule {}
