import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { GraphWidget } from '../../../classes/widgets';
import { BaseWidget } from '../widget/widget.base.component';

@Component({
  selector: 'graph-widget',
  templateUrl: './graph.widget.component.html',
  styleUrls: ['./graph.widget.component.css', '../widget/widget.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GraphWidgetComponent extends BaseWidget<GraphWidget> implements OnInit {
  ngOnInit() {
    this.widget.title = 'Some Graph';
  }
}
