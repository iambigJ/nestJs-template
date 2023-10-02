import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import {TaskMiddleware , secondmiddleware} from "./task.middleware";

@Module({
  providers: [TaskService],
  controllers: [TaskController],
})



 class TaskModule {}
export class mymiddleware {
  configure(consumer) {
    consumer
        .apply(TaskMiddleware, secondmiddleware)
        .forRoutes('task'); // You can specify specific routes instead of '*' if needed
  }
}