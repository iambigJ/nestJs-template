import { Module } from '@nestjs/common';
import {Taskmodule} from "./modules/task/task.module";

@Module({
  imports: [ Taskmodule ],
})
export class AppModule {}
