import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MockService {

    counterProvider(): Observable<any> {
        return Observable.of(255);
    }

    counterProvider1(): Observable<any> {
        return Observable.of(50);
    }

    percentageProvider(): Observable<any> {
        return Observable.of(50);
    }

    percentageProvider1(): Observable<any> {
        return Observable.of(100);
    }
}
