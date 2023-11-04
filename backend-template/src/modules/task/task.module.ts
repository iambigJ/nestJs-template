import { Module, MiddlewareConsumer, NestModule, Scope, Inject } from '@nestjs/common';
import { TaskMiddleware } from './task.middleware';
import { TaskController } from './task.controller'; // Correct the import path for the controlle
import {config,me} from "../../services/test.service/test.provider";
import {TaskService} from './task.service'
@Module({
  controllers: [TaskController],
  providers: [TaskService,config]
})
export class Taskmodule implements NestModule {
  constructor() {
      const x = new TaskService()
    x.createTask()
  }
  configure(consumer: MiddlewareConsumer) : void {
    consumer.apply(TaskMiddleware).forRoutes('task'); // Specify your route here
  }
}