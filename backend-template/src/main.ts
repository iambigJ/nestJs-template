import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, BadRequestException } from '@nestjs/common';
import {MyLogger} from './common/loggercustom'
import {ScrapperModule} from "./modules/scrapper/scrapper.module";
import {ParrentRepository} from "./modules/scrapper/provider/parrent.repository";
import {ScrapperService} from "./modules/scrapper/provider/scrapper.service";
async function bootstrap() {
    const app = await NestFactory.create(AppModule,{
        logger: new MyLogger()
    });
    const scrapper  = app.get(ScrapperModule)
    await scrapper.scrapp_parrent_url('alpha','https://divar.ir/s/iran/car/alfa-romeo/4c')
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
}
bootstrap();