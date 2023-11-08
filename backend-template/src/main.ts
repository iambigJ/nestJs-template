import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, BadRequestException,Logger } from '@nestjs/common';
import {TaskController} from './modules/task/task.controller'
import {MyLogger} from './common/loggercustom'

async function bootstrap() {
    const app = await NestFactory.create(AppModule,{
        logger: new MyLogger()
    });

    app.useGlobalPipes(
        new ValidationPipe({
            exceptionFactory: (errors) => {
                const result = errors.map((error) => ({
                    property: error.property,
                    message: error.constraints[Object.keys(error.constraints)[0]],
                }));
                return new BadRequestException(result);
            },
            stopAtFirstError: true,
        }),

    );
    await app.listen(3000);
    console.log('Listening on port 3000');
}
bootstrap();