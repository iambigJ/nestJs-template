import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Parrent, parrent} from '../entity/Parrent';
import { ParrentDto } from '../DTO/parrent.dto';

@Injectable()
export class ScrapperRepository {
    constructor(
        @InjectModel('par') private readonly parrentModel: Model<typeof parrent>,
    ) {}

    async create(parrentDto: ParrentDto): Promise<void> {
        try {
            const result = await this.parrentModel.create({Carname: 'okokok', Url: 'sdsdsd'});
            console.log(result);
        } catch (error) {
            console.error('Error creating parrent:', error);
            // Handle error as needed
        }
    }

    async findAndupdate(mainCarname: string, updateres: object): Promise<any> {
        try {
            const update = {$set:  updateres}
            const filter = { CarName: mainCarname };
            const options = {
                upsert: true,
                new: true,
                runValidators: true,
            };
           const result   =  await this.parrentModel.findOneAndUpdate(filter, update, options);
           return result
        } catch (error) {
            console.error('Error finding/updating parrent:', error);
            // Handle error as needed
        }
    }
    async findOne(filter: object): Promise<any> {
        try {
            const result = await this.parrentModel.findOne(filter)
            return result;
        } catch (error) {
            console.error('Error finding parrent:', error);
            // Handle error as needed
            throw error; // Re-throw the error if you want to propagate it
        }
    }

}