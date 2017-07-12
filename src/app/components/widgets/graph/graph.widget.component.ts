import { Component, OnInit, Input, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { GraphWidget } from '../../../classes/widgets';
import { BaseWidget } from '../widget/widget.base.component';
import { Chart } from 'chart.js';

@Component({
  selector: 'graph-widget',
  templateUrl: './graph.widget.component.html',
  styleUrls: ['./graph.widget.component.css', '../widget/widget.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GraphWidgetComponent extends BaseWidget<GraphWidget> implements OnInit, AfterViewInit {
    chartId: string;
    ngOnInit() {
        this.chartId = this.GenerateId();
        this.widget.title = 'Some Graph';
  }

  ngAfterViewInit() {
    const ctx = document.getElementById(this.chartId);
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [ 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange' ],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
  }

  private GenerateId() {
    let str = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i <= 10; i++) {
        str += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return str;
  }
}
