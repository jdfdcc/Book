import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClickPage } from './click';
import { IntToTimePipe } from "../../pipes/int-to-time/int-to-time";

@NgModule({
  declarations: [
    ClickPage,
    IntToTimePipe
  ],
  imports: [
    IonicPageModule.forChild(ClickPage),
  ],
  exports: [
    ClickPage
  ]
})
export class ClickPageModule {}
