import { NestMiddleware } from '@nestjs/common';
export declare class TaskMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
