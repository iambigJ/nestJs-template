import { Controller, Post, Body, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import {BadRequestException} from "@nestjs/common";
import {taskDto} from './DTO/task-DTO'
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly TaskService: TaskService) {
  }
  @Post()
  @UsePipes(new  ValidationPipe({ whitelist: true ,forbidNonWhitelisted: true
  }))
  createTask(@Body()  taskDto: taskDto): object {
    console.log(taskDto)
    console.log(this.TaskService.ok())
    return { key: 'body' }; // Assuming 'ok' is a property of the request body
  }
}