import { Widget } from './Widget';
import { WidgetType } from './WidgetType';

export class GraphWidget extends Widget {

    title: string;

    constructor(cols: number = 4, rows: number = 2) {
        super(WidgetType.Graph, cols, rows);
    }
}
