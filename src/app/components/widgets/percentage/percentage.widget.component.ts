import { Component, OnInit, Input } from '@angular/core';
import { PercentageWidget } from '../../../classes/widgets';
import { BaseWidget } from '../widget/widget.base.component';

@Component({
  selector: 'percentage-widget',
  templateUrl: './percentage.widget.component.html',
  styleUrls: ['./percentage.widget.component.css', '../widget/widget.component.css']
})
export class PercentageWidgetComponent extends BaseWidget<PercentageWidget> implements OnInit {

  ngOnInit() {
    this.widget.title = 'Sprint Progress';
    this.widget.percentage = 50;
  }

}
