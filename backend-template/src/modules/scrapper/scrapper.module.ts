import {Inject, Module} from '@nestjs/common';
import { ScrapperService } from './provider/scrapper.service';
import { ScrapperController } from './contoller/scrapper.controller';
import {Parrent, parrent} from "./entity/Parrent";
import {MongooseModule} from "@nestjs/mongoose";
import {ParrentRepository} from "./provider/parrent.repository";
import {array_utils} from "../../common/global/util.arrays";
import {save_images} from "./provider/scrapper.save";

@Module({
  imports:  [MongooseModule.forFeature([{ name: 'par', schema: parrent }])],
  controllers: [ScrapperController],
  providers: [ScrapperService,ParrentRepository, {
      provide: 'saveImages',
      useValue: save_images,
  }],

})
export class ScrapperModule {
    constructor(

        private readonly ScrapperService: ScrapperService,
        private readonly Scrapperrepo: ParrentRepository,
    ) {
    }

    async scrapp_parrent_url(carname: string, url: string): Promise<void> {
        const parrent_scrapps: string[] = await this.ScrapperService.srapp_parrent_url(url)
        const parrent_result: string[] =  array_utils.findUniqueStrings(parrent_scrapps)
        const parrent_mongo: string[] = parrent_result.flat(Infinity)
        const result = await this.Scrapperrepo.findAndupdate(carname, {Carname: carname, Url: parrent_mongo})

    }

    async scrapp_images(carname: string): Promise<void> {

        const url_images = await this.ScrapperService.scrapp_images(carname)
        const final_urls = array_utils.filter(url_images)
        console.log(final_urls)
        // await this.Scrapperrepo.findAndupdate(carname,final_urls)

    }
}