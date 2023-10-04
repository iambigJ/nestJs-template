import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskMiddleware } from './task.middleware';
import { TaskController } from './task.controller'; // Correct the import path for the controller

@Module({
  providers: [TaskService],
  controllers: [TaskController],
})
export class Taskmodule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TaskMiddleware).forRoutes('task'); // Specify your route here
  }
}