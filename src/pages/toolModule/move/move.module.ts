import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovePage } from './move';
import { DirectivesModule } from "../../../directives/directives.module";

@NgModule({
  declarations: [
    MovePage,
  ],
  imports: [
    DirectivesModule,
    IonicPageModule.forChild(MovePage),
  ],
  exports: [
    MovePage
  ]
})
export class MovePageModule { }
