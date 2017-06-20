import { Component, OnInit } from '@angular/core';
import { IWidget } from '../../classes/module';
import { CounterWidget, PercentageWidget, GraphWidget } from '../../classes/widgets';

@Component({
  selector: 'mat-dash',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    columns: number;
    widgets: IWidget[];

    ngOnInit() {
        this.columns = 8;
        this.widgets = [
            new CounterWidget(),
            new PercentageWidget(),
            new GraphWidget(),
            new PercentageWidget(),
            new CounterWidget(),
            new GraphWidget(),
        ];
    }
}
