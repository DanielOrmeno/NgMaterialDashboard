import { Widget } from './Widget';
import { Observable } from 'rxjs/Observable';
import { WidgetType } from './WidgetType';

export class GraphWidget extends Widget {

    title: string;

    constructor(provider: () => Observable<any>, cols: number = 3, rows: number = 1) {
        super(WidgetType.Graph, provider, cols, rows);
    }
}
