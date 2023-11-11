import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {parrent} from "../entity/Parrent";
import {ParrentDto} from '../DTO/parrent.dto'
import {ScrapperService} from "./scrapper.service";

@Injectable()
export class ScrapperRepository{
    constructor(
        @InjectModel('par') private parrnetModel: Model<typeof parrent>,
        private readonly ScrapperService : ScrapperService,
    ) {

    }
     async create(parrentDto: ParrentDto){
        await this.ScrapperService.srapp_parrent_url('https://divar.ir/s/iran')

    }

}