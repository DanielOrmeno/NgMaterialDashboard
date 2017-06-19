import { Component, Input, OnInit } from '@angular/core';
import { Widget } from '../../../classes/module';

export abstract class BaseWidget<T extends Widget> implements OnInit {
  @Input()
  widget: T;
  @Input()
  title: string;
  @Input()
  editEnabled: boolean;

  loading: boolean;

  ngOnInit() {
    this.loading = false;
    this.editEnabled = false;
  }

  changedCols($event) {
    console.log($event);
    this.widget.cols = $event.value;
  }

  changedRows($event) {
    console.log($event);
    this.widget.rows = $event.value;
  }
}
