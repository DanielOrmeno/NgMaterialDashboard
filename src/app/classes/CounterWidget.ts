import { Widget } from './Widget';
import { Observable } from 'rxjs/Observable';
import { WidgetType } from './WidgetType';

export class CounterWidget extends Widget {

    title: string;
    count: number;

    constructor(provider: () => Observable<any>, cols: number = 2, rows: number = 2) {
        super(WidgetType.Counter, provider, cols, rows);
        this.count = 0;
    }
}
