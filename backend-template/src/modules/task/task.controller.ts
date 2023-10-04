import { Controller, Post, Body, Req, HttpException,NotFoundException } from '@nestjs/common';

@Controller('task')
export class TaskController {
  @Post()
  createTask(@Body() body: { ok: string }, @Req() req: any): object {
    const abortSignal: number[] = [2, 3, 4];
    const mockAbortSignal: Object = { ...abortSignal }; // Fixed variable name
    console.log(body)
    if (body.ok == 'ok') {
      throw  new NotFoundException()
    }

    return { key: body }; // Assuming 'ok' is a property of the request body
  }
}