import { Module } from '@nestjs/common';
import {Taskmodule} from "./modules/task/task.module";
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
      Taskmodule,
        ],
})
export class AppModule {}
