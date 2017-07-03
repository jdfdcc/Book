import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChartPage } from './chart';
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
  declarations: [
    ChartPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ChartPage),
  ],
  exports: [
    ChartPage
  ]
})
export class ChartPageModule {}
