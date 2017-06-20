import { Component, OnInit, Output, Input, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'dash-widget',
  templateUrl: './widget.component.html',
  styleUrls: [ './widget.component.css' ]
})
export class WidgetComponent implements OnInit {

    @Input()
    cols: number;
    @Input()
    rows: number;

    @Output()
    changeCols: EventEmitter<number>;
    @Output()
    changeRows: EventEmitter<number>;

    @ViewChild('configure')
    configure: any;

    ngOnInit() {
        this.changeCols = new EventEmitter();
        this.changeRows = new EventEmitter();
    }

    updatedCols($event) {
        this.changeCols.emit($event.value);
    }

    updatedRows($event) {
        this.changeRows.emit($event.value);
    }

    open() {
        this.configure.open();
    }
}
