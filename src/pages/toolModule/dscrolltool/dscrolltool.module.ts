import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DscrolltoolPage } from './dscrolltool';
import { DatescrollComponentModule } from "../../../components/datescroll/datescroll.module";
@NgModule({
  declarations: [
    DscrolltoolPage,
  ],
  imports: [
    DatescrollComponentModule,
    IonicPageModule.forChild(DscrolltoolPage),
  ],
  exports: [
    DscrolltoolPage
  ]
})
export class DscrolltoolPageModule {}
