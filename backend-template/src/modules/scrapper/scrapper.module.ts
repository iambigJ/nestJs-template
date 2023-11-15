import { Module, Inject} from '@nestjs/common';
import { ScrapperService } from './provider/scrapper.service';
import {Parrent, parrent} from "./entity/Parrent";
import {MongooseModule} from "@nestjs/mongoose";
import {ParrentRepository} from "./provider/parrent.repository";
import {array_utils} from "../../common/global/util.arrays";
import {ImagesEntity,Images} from "./entity/images";
import {save} from "./provider/scrapper.save";
import { ConfigService } from '@nestjs/config';
class test{
    constructor(x, private readonly ScrapperService
    ) {
        console.log(x)
    }
    test(){
        console.log('sd')
    }
}
@Module({
    imports: [
        MongooseModule.forFeatureAsync([
            {
                name: Parrent.name,
                useFactory: () => {
                    const schema = parrent
                    schema.post
                    ('findOneAndUpdate', () => console.log('pre update'));
                    return schema;
                },
            },
        ]),
    ],
    providers: [ScrapperService, ParrentRepository,
        {
            provide: 'ok',
            useFactory: ()=>{ return   test},
            inject: [ScrapperService], // Inject Test class


        }
    ],
})
export class ScrapperModule {
    constructor(

        private readonly ScrapperService: ScrapperService,
        private readonly Scrapperrepo: ParrentRepository,
        private config: ConfigService
    ) {
    }

    async scrapp_parrent_url(carname: string, url: string): Promise<void> {
        const parrent_scrapps: string[] = await this.ScrapperService.srapp_parrent_url(url)
        const parrent_result: string[] =  array_utils.findUniqueStrings(parrent_scrapps)
        const parrent_mongo: string[] = parrent_result.flat(Infinity)
        const result: void = await this.Scrapperrepo.findAndupdate(carname, {Carname: carname, Url: parrent_mongo})
        console.log('................................0..........................')
        console.log(result)
    }

    async scrapp_images(carname: string): Promise<void> {
        const url_images = await this.ScrapperService.scrapp_images(carname)
        const final_urls = array_utils.filter(url_images)
        await this.Scrapperrepo.findAndupdate('alpha',{ CarName:'alpha', Url: ['1','2']})
        console.log('..............................................1...............................................')
        save.Saveimages(final_urls,carname)
    }
}