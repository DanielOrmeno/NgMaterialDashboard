import { WidgetType } from './WidgetType';

export interface IWidget {
    cols: number;
    rows: number;
    type: WidgetType;
}

export abstract class Widget implements IWidget {
    cols: number;
    rows: number;
    type: WidgetType;

    constructor(type: WidgetType, cols: number = 1, rows: number = 2) {
        this.cols = cols;
        this.rows = rows;
        this.type = type;
    }
}
