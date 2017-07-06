import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatepickerComponent } from './datepicker';
import { PipesModule } from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    DatepickerComponent,
  ],
  imports: [
    IonicPageModule.forChild(DatepickerComponent),
  ],
  exports: [
    DatepickerComponent
  ],
  providers: [],
})
export class DatepickerComponentModule { }
