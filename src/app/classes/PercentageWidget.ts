import { Widget } from './Widget';
import { Observable } from 'rxjs/Observable';
import { WidgetType } from './WidgetType';

export class PercentageWidget extends Widget {

    title: string;
    percentage: number;

    constructor(provider: () => Observable<any>, cols: number = 1, rows: number = 1) {
        super(WidgetType.Percentage, provider, cols, rows);
        this.percentage = 0;
    }
}
