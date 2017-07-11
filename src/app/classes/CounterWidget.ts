import { Widget } from './Widget';
import { Observable } from 'rxjs/Observable';
import { WidgetType } from './WidgetType';

export class CounterWidget extends Widget {

    title: string;
    count: number;

    constructor(provider: () => Observable<any>, cols: number = 1, rows: number = 1) {
        super(WidgetType.Counter, provider, cols, rows);
        this.count = 0;
    }
}
