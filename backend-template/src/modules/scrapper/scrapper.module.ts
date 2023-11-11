import { Module } from '@nestjs/common';
import { ScrapperService } from './provider/scrapper.service';
import { ScrapperController } from './contoller/scrapper.controller';
import {parrent,parrentDocument} from "./entity/Parrent";
import {MongooseModule} from "@nestjs/mongoose";
import {ScrapperRepository} from "./provider/scrapper.repository";

@Module({
  imports:  [MongooseModule.forFeature([{ name: 'par', schema: parrent }])],
  controllers: [ScrapperController],
  providers: [ScrapperService,ScrapperRepository],
})
export class ScrapperModule {
  constructor(
      private readonly ScrapperService: ScrapperService
  )
  {}
  async scrapper(){
      await  this.ScrapperService.srapp_parrent_url('https://divar.ir/s/iran')

  }
}
