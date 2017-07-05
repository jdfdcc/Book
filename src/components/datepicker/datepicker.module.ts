import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatepickerComponent } from './datepicker';
import { PipesModule } from "../../pipes/pipes.module";
import {IntToTimePipe  } from "../../pipes/int-to-time/int-to-time";

@NgModule({
  declarations: [
    DatepickerComponent,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(DatepickerComponent),
  ],
  exports: [
    DatepickerComponent
  ],
  providers: [],
})
export class DatepickerComponentModule { }
