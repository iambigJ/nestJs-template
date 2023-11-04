import {  Repository } from 'typeorm';
import {taskDto} from './DTO/task-DTO'
import { TaskEntity } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {Injectable} from "@nestjs/common";


@Injectable()
export class TaskService  {
    // constructor(
    //     @InjectRepository(TaskEntity) // Specify the Entity type
    //     private readonly TasksRepository: Repository<TaskEntity>,
    // ) {}
    async createTask(): Promise<string[]> {
            return ['124134']
    }

}
