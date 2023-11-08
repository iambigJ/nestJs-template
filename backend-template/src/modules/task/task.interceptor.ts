import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Injectable()
export class OptionalFileInterceptor implements NestInterceptor {
    constructor() {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();

        // Check if 'file' exists in the request body
        const fileExists = request && request.body && request.body.file;

            console.log(FileInterceptor)

        return next.handle()
    }
}