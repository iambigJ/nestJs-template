import { Module} from '@nestjs/common';
import { ScrapperService } from './provider/scrapper.service';
import  {MongooseModule} from "@nestjs/mongoose";
import {parrentSchema, parrentClass} from "./entity/Parrent";
import {ImageSchema,imageChildClass} from "./entity/Child";
import {ParrentRepository} from "./provider/parrent.repository";
import {inital_divar} from "./provider/intial.provider";
import { ConfigService } from '@nestjs/config';
import {ChildRepository} from "./provider/child.repository";
import {save} from './provider/scrapper.save'
@Module({
    imports: [
        MongooseModule.forFeatureAsync([
            {
                name: parrentClass.name,
                useFactory: () => {
                    const schema = parrentSchema;
                    schema.post('findOneAndUpdate', () => console.log('pre update'));
                    return schema;
                },
            },
            {
                name: imageChildClass.name,
                useFactory: () => {
                    const schema = ImageSchema;
                    // Add any additional schema configurations or hooks here
                    return schema;
                },
            },
            // Add more entities if needed
        ]),
    ],
    providers: [inital_divar,
                ScrapperService,
                ParrentRepository,
                ChildRepository
    ],
})


export class ScrapperModule {
    constructor(
        private readonly config: ConfigService
    ) {}

    test() {
        save.Saveimages(['https://s101.divarcdn.com/static/pictures/1700289476/AZHn12bh.1.jpg'],'bwm')

    }
}

