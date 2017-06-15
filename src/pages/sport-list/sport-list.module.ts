import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SportListPage } from './sport-list';
import { PipesModule } from "../../pipes/pipes.module";
@NgModule({
  declarations: [
    SportListPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(SportListPage),
  ],
  exports: [
    SportListPage
  ]
})
export class SportListPageModule { }
