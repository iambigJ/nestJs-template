import { Controller, Post, UsePipes, ValidationPipe, Body, Inject, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { config, me } from '../../services/test.service/test.provider';
import {TaskGuard} from "./task.guard";

@Controller('task')
export class TaskController {
    constructor(
        private readonly taskservice: TaskService,
        @Inject('Test-provider') private readonly testProvider: me,
    ) {}

    @Post()
    @UseGuards(TaskGuard)
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    async createTask(@Body() body: any): Promise<object> {
        // Assuming 'key' is a property of the request body
        const { key } = body;
        console.log( this.testProvider)
        return {x : 'x'}

    }
}