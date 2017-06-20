import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WidgetComponent } from '../components/widgets/widget/widget.component';
import { CounterWidgetComponent } from '../components/widgets/counter/counter.widget.component';
import { PercentageWidgetComponent } from '../components/widgets/percentage/percentage.widget.component';
import { GraphWidgetComponent } from '../components/widgets/graph/graph.widget.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  declarations: [
      WidgetComponent,
      CounterWidgetComponent,
      PercentageWidgetComponent,
      GraphWidgetComponent
  ],
  exports: [
      WidgetComponent,
      CounterWidgetComponent,
      PercentageWidgetComponent,
      GraphWidgetComponent
  ],
  providers: []
})
export class WidgetsModule { }
