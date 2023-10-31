import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class TaskMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    req.ok = 'okokokok';
    next();
  }
}
