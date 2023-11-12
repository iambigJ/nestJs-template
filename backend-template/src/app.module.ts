import { Module } from '@nestjs/common';
import {ScrapperModule} from './modules/scrapper/scrapper.module'
import {mongooseConfig} from '../src/common/config/mongoose.config'

@Module({
  imports: [
      mongooseConfig,
      ScrapperModule
        ]})
export class AppModule {
    constructor() {}

}
