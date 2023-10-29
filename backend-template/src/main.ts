import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, BadRequestException } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({
            exceptionFactory: (errors) => {
                const result = errors.map((error) => ({
                    property: error.property,
                    message: error.constraints[Object.keys(error.constraints)[0]],
                }));
                return new BadRequestException(result);
            },
            stopAtFirstError: false,
        }),
    );
    await app.listen(3000); // Use await to ensure the app is fully initialized before listening
    console.log('Listening on port 3000');
}
bootstrap();