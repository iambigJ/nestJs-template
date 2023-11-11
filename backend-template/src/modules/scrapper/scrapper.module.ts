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
export class ScrapperModule {}
