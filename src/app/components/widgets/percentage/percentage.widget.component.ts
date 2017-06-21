import { Component, OnInit, Input } from '@angular/core';
import { PercentageWidget } from '../../../classes/widgets';
import { BaseWidget } from '../widget/widget.base.component';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'percentage-widget',
  templateUrl: './percentage.widget.component.html',
  styleUrls: ['./percentage.widget.component.css', '../widget/widget.component.css']
})
export class PercentageWidgetComponent extends BaseWidget<PercentageWidget> implements OnInit {

  async ngOnInit() {
    this.widget.title = 'Sprint Progress';

    this.updatePercentage();
  }

  async updatePercentage() {
    this.loading = true;
    this.widget.percentage = await this.refresh();
    this.loading = false;
  }
}
