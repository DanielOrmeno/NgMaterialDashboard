import { Component, OnInit } from '@angular/core';
import { IWidget } from '../../classes/module';
import { CounterWidget, PercentageWidget, GraphWidget } from '../../classes/widgets';
import { MockService } from '../../services/mock.service';
@Component({
  selector: 'mat-dash',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    columns: number;
    widgets: IWidget[];

    constructor(private mockService: MockService) {}

    ngOnInit() {
        this.columns = 6;
        this.widgets = [
            new CounterWidget(this.mockService.counterProvider),
            new PercentageWidget(this.mockService.percentageProvider),
            new PercentageWidget(this.mockService.percentageProvider1),
            new GraphWidget(this.mockService.percentageProvider),
            new GraphWidget(this.mockService.percentageProvider)
        ];
    }
}
