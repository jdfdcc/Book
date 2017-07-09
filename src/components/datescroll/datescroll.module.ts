import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatescrollComponent } from './datescroll';

@NgModule({
  declarations: [
    DatescrollComponent,
  ],
  imports: [
    IonicPageModule.forChild(DatescrollComponent),
  ],
  exports: [
    DatescrollComponent
  ]
})
export class DatescrollComponentModule {}
