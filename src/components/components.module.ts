import { NgModule } from "@angular/core"
import { ClickiPoperComponentModule } from './clicki-poper/clicki-poper.module';
import { ShowMsgComponentModule } from './show-msg/show-msg.module';
import { ChartsComponentModule } from "./charts/charts.module";
import { DatepickerComponentModule } from "../components/datepicker/datepicker.module";

/**
 * 存放所有 Component的信息类
 * 提供单次引入全部控件
 */
@NgModule({
  exports: [
    ClickiPoperComponentModule,
    ShowMsgComponentModule,
    ChartsComponentModule,
    DatepickerComponentModule
  ],
})
export class ComponentsModule {
}
