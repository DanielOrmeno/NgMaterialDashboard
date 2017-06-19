import { Widget } from './Widget';
import { WidgetType } from './WidgetType';

export class CounterWidget extends Widget {

    title: string;
    count: number;

    constructor(cols: number = 2, rows: number = 2) {
        super(WidgetType.Counter, cols, rows);
    }
}
