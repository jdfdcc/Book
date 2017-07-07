import { NgModule } from "@angular/core"
import { IonicPageModule } from 'ionic-angular';
import { ClickiPoperComponentModule } from './clicki-poper/clicki-poper.module';
import { ShowMsgComponentModule } from './show-msg/show-msg.module';

import { ChartsComponentModule } from "./charts/charts.module";
// import { DatepickerComponent } from "../components/datepicker/datepicker";
import { DatepickerComponentModule } from "../components/datepicker/datepicker.module";

/**
 * 存放所有 Component的信息类
 */
@NgModule({
  exports: [ClickiPoperComponentModule,
    ShowMsgComponentModule,
    ChartsComponentModule,
    DatepickerComponentModule],
})
export class ComponentsModule {
}
