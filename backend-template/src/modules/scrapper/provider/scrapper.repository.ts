import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {parrent} from "../entity/Parrent";
import {ParrentDto} from '../DTO/parrent.dto'
@Injectable()
export class ScrapperRepository{
    constructor(
        @InjectModel('par') private parrnetModel: Model<typeof parrent>
    ) {}
     create(parrentDto: ParrentDto){
        this.parrnetModel.create()

    }

}