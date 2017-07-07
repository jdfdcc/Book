import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowMsgComponent } from './show-msg';
import { DirectivesModule } from "../../directives/directives.module";

@NgModule({
  declarations: [
    ShowMsgComponent,
  ],
  imports: [
    DirectivesModule,
    IonicPageModule.forChild(ShowMsgComponent),
  ],
  exports: [
    ShowMsgComponent
  ]
})
export class ShowMsgComponentModule { }
