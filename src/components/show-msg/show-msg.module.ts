import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowMsgComponent } from './show-msg';

@NgModule({
  declarations: [
    ShowMsgComponent,
  ],
  imports: [
    IonicPageModule.forChild(ShowMsgComponent),
  ],
  exports: [
    ShowMsgComponent
  ]
})
export class ShowMsgComponentModule {}
