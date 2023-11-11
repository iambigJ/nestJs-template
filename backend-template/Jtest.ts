import { Observable } from 'rxjs';
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";

const observable = new Observable(function subscribe(subscriber) {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.complete();
});

const foo =  <T extends observableToBeFn>( a:T ) => {
    console.log('sdd')
}

foo<string>('a')