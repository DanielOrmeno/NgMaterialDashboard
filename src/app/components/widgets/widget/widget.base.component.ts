import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Widget } from '../../../classes/module';

export abstract class BaseWidget<T extends Widget> {

  @Input()
  widget: T;
  @Input()
  title: string;

  loading = false;

  updateCols($event) {
    this.widget.cols = $event;
  }

  updateRows($event) {
    this.widget.rows = $event;
  }

  async refresh(): Promise<any> {
    return this.widget.refresh().toPromise();
  }
}
