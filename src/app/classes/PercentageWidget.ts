import { Widget } from './Widget';
import { WidgetType } from './WidgetType';

export class PercentageWidget extends Widget {

    title: string;
    percentage: number;

    constructor(cols: number = 2, rows: number = 2) {
        super(WidgetType.Percentage, cols, rows);
    }
}
