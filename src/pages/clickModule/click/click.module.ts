import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClickPage } from './click';
import { PipesModule } from "../../../pipes/pipes.module";


@NgModule({
  declarations: [
    ClickPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(ClickPage),
  ],
  exports: [
    ClickPage
  ]
})
export class ClickPageModule { }
