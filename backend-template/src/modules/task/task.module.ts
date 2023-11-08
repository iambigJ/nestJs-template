import { Module, MiddlewareConsumer, NestModule, Scope, Inject } from '@nestjs/common';
import { TaskMiddleware } from './task.middleware';
import { TaskController } from './task.controller'; // Correct the import path for the controlle
import {config,me} from "../../services/test.service/test.provider";
import {TaskService} from './task.service'
import multer from "multer";
import {MulterModule} from "@nestjs/platform-express";
import {MyLogger} from "../../common/loggercustom";

@Module({
  controllers: [TaskController],
  providers: [TaskService,config,me,MyLogger]
})
export class Taskmodule implements NestModule {
  constructor() {
  }
  configure(consumer: MiddlewareConsumer) : void {
    consumer.apply(TaskMiddleware).forRoutes('task'); // Specify your route here
  }
}