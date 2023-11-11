import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {ScrapperModule} from './modules/scrapper/scrapper.module'
import {mongooseConfig} from '../src/common/config/mongoose.config'
@Module({
  imports: [
      mongooseConfig,
      ScrapperModule
        ],
})
export class AppModule {
    constructor() {

    }
}
