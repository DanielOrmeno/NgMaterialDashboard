import { Component, OnInit, Output, Input, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'dash-widget',
  templateUrl: './widget.component.html',
  styleUrls: [ './widget.component.css' ]
})
export class WidgetComponent implements OnInit {

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
    @Output()
    refreshState: EventEmitter<boolean> = new EventEmitter();

    refreshIntervals: number[];
    autoRefresh: boolean;

    ngOnInit() {
        this.refreshIntervals = [ 30, 60, 90 ];
    }

    open() {
        this.configure.open();
    }

    autoRefreshChange($event) {
        this.autoRefresh = $event.checked;
        this.refreshState.emit(this.autoRefresh);
    }
}
