import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomAddPage } from './custom-add';
import { HighlightDirective } from "../../../directives/highlight/highlight";
import { HearBarColorDirective } from "../../../directives/hear-bar-color/hear-bar-color";

@NgModule({
  declarations: [
    CustomAddPage,
    HighlightDirective,
    HearBarColorDirective
  ],
  imports: [
    IonicPageModule.forChild(CustomAddPage),
  ],
  exports: [
    CustomAddPage
  ]
})
export class CustomAddPageModule { }
