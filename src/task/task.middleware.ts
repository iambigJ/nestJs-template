import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
 class TaskMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    req.l = 'llllll'
    next();
  }
}

@Injectable()
class secondmiddleware  implements NestMiddleware {
  use(req : any ,res : any ,next : ()=> void  ) {
    req.p = 'ppppppp'
    next()
  }

}

export {
  TaskMiddleware,
  secondmiddleware
}