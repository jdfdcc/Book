import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomAddPage } from './custom-add';
import { DirectivesModule } from "../../../directives/directives.module";
@NgModule({
  declarations: [
    CustomAddPage,
  ],
  imports: [
    DirectivesModule,
    IonicPageModule.forChild(CustomAddPage),
  ],
  exports: [
    CustomAddPage
  ]
})
export class CustomAddPageModule { }
