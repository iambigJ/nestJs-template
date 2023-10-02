import { Controller, Get, Post, Body, Req , UseFilters, HttpStatus ,HttpException} from '@nestjs/common';
import {HttpExceptionFilter} from "../common/errorHandeling/commonExeption";

@Controller('task')
export class TaskController {
  @Get()
  @UseFilters(HttpExceptionFilter)
  async throwCustomException() {
  }
}
