import {Injectable} from "@nestjs/common";
import {BaseEntity , Repository} from "typeorm";
import {TaskEntity} from "./task.entity";

@Injectable()

export class TaskRepository extends Repository<TaskEntity>{

    createTask(){
        console.log(this.create())
    }

}