import { Module, MiddlewareConsumer, NestModule, Scope } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskMiddleware } from './task.middleware';
import { TaskController } from './task.controller'; // Correct the import path for the controller

@Module({
  providers: [
    {
      provide: TaskService,
      useClass: TaskService,
      scope: Scope.DEFAULT, // Set the scope to global
    }
      ],
  controllers: [TaskController],
})
export class Taskmodule implements NestModule {
  configure(consumer: MiddlewareConsumer) : void {
    consumer.apply(TaskMiddleware).forRoutes('task'); // Specify your route here
  }
}