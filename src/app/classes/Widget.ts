import { Observable } from 'rxjs/Observable';
import { WidgetType } from './WidgetType';

export interface IWidget {
    cols: number;
    rows: number;
    type: WidgetType;
    refresh: () => Observable<any>;
}

export abstract class Widget implements IWidget {
    cols: number;
    rows: number;
    type: WidgetType;
    refresh: () => Observable<any>;

    constructor(type: WidgetType, refresh: () => Observable<any>, cols: number = 1, rows: number = 2) {
        this.cols = cols;
        this.rows = rows;
        this.type = type;
        this.refresh = refresh;
    }
}
