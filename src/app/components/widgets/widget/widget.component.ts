import { Component, OnInit, Output, Input, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'dash-widget',
  templateUrl: './widget.component.html',
  styleUrls: [ './widget.component.css' ]
})
export class WidgetComponent {

    @ViewChild('configure')
    configure: any;

    @Input()
    cols: number;
    @Input()
    rows: number;

    @Output()
    changeCols: EventEmitter<number> = new EventEmitter();
    @Output()
    changeRows: EventEmitter<number> = new EventEmitter();

    open() {
        this.configure.open();
    }
}
