import { Component, OnInit, Input } from '@angular/core';
import { IntervalObservable } from 'rxjs/Observable/IntervalObservable';
import { CounterWidget } from '../../../classes/widgets';
import { BaseWidget } from '../widget/widget.base.component';

@Component({
  selector: 'counter-widget',
  templateUrl: './counter.widget.component.html',
  styleUrls: ['./counter.widget.component.css', '../widget/widget.component.css']
})
export class CounterWidgetComponent extends BaseWidget<CounterWidget> implements OnInit {

  ngOnInit() {
    this.widget.title = 'Number of Jobs';
    this.refreshCounter();
  }

  async refreshCounter() {
    this.widget.count = 0;
    this.loading = true;
    const count = await this.refresh();

    // IntervalObservable.create(1000).subscribe(n => console.log(n));
    const interval = setInterval(() => {
      this.widget.count++;

      if (this.widget.count === count) {
        clearInterval(interval);
        this.loading = false;
      }

    }, 10);
  }
}
