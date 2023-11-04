import { CanActivate, ExecutionContext, Injectable, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import {Reflector} from "@nestjs/core";

@Injectable()
export class TaskGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
   ): boolean | Promise<boolean> | Observable<boolean> {
      const className = context.getClass().name; // "CatsController"

    console.log(Reflector.name)
    // Log all field names
    return true;
  }
}
