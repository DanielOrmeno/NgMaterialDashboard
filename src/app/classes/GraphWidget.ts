import { Widget } from './Widget';
import { Observable } from 'rxjs/Observable';
import { WidgetType } from './WidgetType';

export class GraphWidget extends Widget {

    title: string;

    constructor(provider: () => Observable<any>, cols: number = 4, rows: number = 3) {
        super(WidgetType.Graph, provider, cols, rows);
    }
}
