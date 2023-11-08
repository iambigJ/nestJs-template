import { Controller } from '@nestjs/common';
import { ScrapperService } from '../provider/scrapper.service';

@Controller('scrapper')
export class ScrapperController {
  constructor(private readonly scrapperService: ScrapperService) {




  }
}
