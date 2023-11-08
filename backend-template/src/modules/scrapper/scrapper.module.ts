import { Module } from '@nestjs/common';
import { ScrapperService } from './provider/scrapper.service';
import { ScrapperController } from './contoller/scrapper.controller';

@Module({
  controllers: [ScrapperController],
  providers: [ScrapperService],
})
export class ScrapperModule {}
