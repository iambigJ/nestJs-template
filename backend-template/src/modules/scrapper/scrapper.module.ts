import { Module, Inject} from '@nestjs/common';
import { ScrapperService } from './provider/scrapper.service';
import {Parrent, parrent} from "./entity/Parrent";
import {InjectModel, MongooseModule} from "@nestjs/mongoose";
import {ParrentRepository} from "./provider/parrent.repository";
import {ImagesEntity,Images} from "./entity/images";
import {array_utils} from "../../common/global/util.arrays";
import {save} from "./provider/scrapper.save";
import { ConfigService } from '@nestjs/config';
import {Model} from "mongoose";
@Module({
    imports: [
        MongooseModule.forFeatureAsync([
            {
                name: Parrent.name,
                useFactory: () => {
                    const schema = parrent;
                    schema.post('findOneAndUpdate', () => console.log('pre update'));
                    return schema;
                },
            },
            {
                name: Images.name,
                useFactory: () => {
                    const schema = ImagesEntity;
                    // Add any additional schema configurations or hooks here
                    return schema;
                },
            },
            // Add more entities if needed
        ]),
    ],
    providers: [ScrapperService, ParrentRepository,
    ],
})
export class ScrapperModule {
    constructor(
        @InjectModel(Parrent.name) private readonly parrentModel: Model<typeof parrent>,
        @InjectModel(Parrent.name) private readonly imageModel: Model<typeof Images>,
        private readonly ScrapperService: ScrapperService,
        private readonly Scrapperrepo: ParrentRepository,
        private config: ConfigService
    ) {
    }

    async scrapp_parrent_url(carname: string, url: string): Promise<void> {
        //-- scrap parrent of image urls
        const parrent_scrapps: string[] = await this.ScrapperService.srapp_parrent_url(url)
        //-- filter and array of parrent
        const parrent_result: string[] =  array_utils.findUniqueStrings(parrent_scrapps)
        const parrent_mongo: string[] = parrent_result.flat(Infinity)
        //-- insert data to database
        await this.Scrapperrepo.findAndupdate({ CarName: carname}, {Carname: carname, Url: parrent_mongo})
        //-- scrapp the photos url
        const url_images = await this.ScrapperService.scrapp_images(carname)
        const final_urls = array_utils.filter(url_images)
        await this.imageModel.findOneAndUpdate({},{ CarName:carname, Url: ['1','2']},{
            upsert: true,
                new: true,
                runValidators: true,
        })
        //-- get and save images
        save.Saveimages(final_urls,carname)
    }


}