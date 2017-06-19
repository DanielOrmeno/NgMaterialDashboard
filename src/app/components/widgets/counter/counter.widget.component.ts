import { Component, OnInit, Input } from '@angular/core';
import { CounterWidget } from '../../../classes/widgets';
import { BaseWidget } from '../widget/widget.component';

@Component({
  selector: 'counter-widget',
  templateUrl: './counter.widget.component.html',
  styleUrls: ['./counter.widget.component.css']
})
export class CounterWidgetComponent extends BaseWidget<CounterWidget> implements OnInit {
  ngOnInit() {
    this.widget.title = 'Number of Jobs';
    this.widget.count = 255;
  }
}
