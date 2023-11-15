import { Module } from '@nestjs/common';
import {ScrapperModule} from './modules/scrapper/scrapper.module'
import {mongooseConfig} from '../src/common/config/mongoose.config'
import { ConfigModule } from '@nestjs/config';
import configload from './common/config/config'
@Module({
  imports: [
      ConfigModule.forRoot({
          load: [configload],
          isGlobal: true,

      }),
      mongooseConfig,
      ScrapperModule
        ]})
export class AppModule {
    constructor() {}

}
