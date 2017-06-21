import { Component, OnInit, Input } from '@angular/core';
import { CounterWidget } from '../../../classes/widgets';
import { BaseWidget } from '../widget/widget.base.component';

@Component({
  selector: 'counter-widget',
  templateUrl: './counter.widget.component.html',
  styleUrls: ['./counter.widget.component.css', '../widget/widget.component.css']
})
export class CounterWidgetComponent extends BaseWidget<CounterWidget> implements OnInit {

  async ngOnInit() {
    this.widget.title = 'Number of Jobs';

    this.loading = true;
    const count = await this.refresh();

    const interval = setInterval(() => {
      this.widget.count++;
      if (this.widget.count === count) {
        clearInterval(interval);
      }
    }, 10);
    this.loading = false;
  }
}
