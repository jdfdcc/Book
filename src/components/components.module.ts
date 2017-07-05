import { NgModule } from "@angular/core"
import { IonicPageModule } from 'ionic-angular';
import { ClickiPoperComponent } from './clicki-poper/clicki-poper';
import { ShowMsgComponent } from './show-msg/show-msg';

import { ChartsComponent } from "./charts/charts";
import { DatepickerComponent } from "../components/datepicker/datepicker";

/**
 * 存放所有 Component的信息类
 */

@NgModule({
  declarations: [ClickiPoperComponent, ShowMsgComponent, ChartsComponent, DatepickerComponent],
  exports: [ClickiPoperComponent, ShowMsgComponent, ChartsComponent, DatepickerComponent],
  imports: [
    IonicPageModule.forChild(ChartsComponent),
    IonicPageModule.forChild(ClickiPoperComponent),
    IonicPageModule.forChild(ShowMsgComponent),
    IonicPageModule.forChild(DatepickerComponent),
  ]
})
export class ComponentsModule {
}
