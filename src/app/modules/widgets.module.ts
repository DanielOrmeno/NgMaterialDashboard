import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CounterWidgetComponent } from '../components/widgets/counter/counter.widget.component';
import { PercentageWidgetComponent } from '../components/widgets/percentage/percentage.widget.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  declarations: [
      CounterWidgetComponent,
      PercentageWidgetComponent
  ],
  exports: [
      CounterWidgetComponent,
      PercentageWidgetComponent
  ],
  providers: []
})
export class WidgetsModule { }
