import { Module, Inject} from '@nestjs/common';
import { ScrapperService } from './provider/scrapper.service';
import {Parrent, parrent} from "./entity/Parrent";
import {MongooseModule} from "@nestjs/mongoose";
import {ParrentRepository} from "./provider/parrent.repository";
import {array_utils} from "../../common/global/util.arrays";
import {ImagesEntity,Images} from "./entity/images";

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
        MongooseModule.forFeature([
            { name: Parrent.name, schema: parrent },
            { name: Images.name, schema: ImagesEntity}
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
        @Inject('ok')  private readonly dynamic: test
    ) {
    }

    async scrapp_parrent_url(carname: string, url: string): Promise<void> {
        const parrent_scrapps: string[] = await this.ScrapperService.srapp_parrent_url(url)
        const parrent_result: string[] =  array_utils.findUniqueStrings(parrent_scrapps)
        const parrent_mongo: string[] = parrent_result.flat(Infinity)
        const result: void = await this.Scrapperrepo.findAndupdate(carname, {Carname: carname, Url: parrent_mongo})
    }

    async scrapp_images(carname: string): Promise<void> {
        const x = new this.dynamic()

        // const url_images = await this.ScrapperService.scrapp_images(carname)
        // const final_urls = array_utils.filter(url_images)
        //  await this.Scrapperrepo.findAndupdate('alpha',{ CarName:'p', Url: ['1','2']})
        // console.log('scrapping started')
        // console.log('final url is ', final_urls)
    }
}