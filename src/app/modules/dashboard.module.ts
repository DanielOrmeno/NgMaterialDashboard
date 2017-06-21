import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { WidgetsModule } from './widgets.module';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { MockService } from '../services/mock.service';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    WidgetsModule
  ],
  declarations: [
      DashboardComponent
  ],
  exports: [
      DashboardComponent
  ],
  providers: [
    MockService
  ]
})
export class DashboardModule { }
