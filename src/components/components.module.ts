import { NgModule } from "@angular/core"
import { IonicPageModule } from 'ionic-angular';
import { ClickiPoperComponent } from './clicki-poper/clicki-poper';
import { ShowMsgComponent } from './show-msg/show-msg';
import { HearBarColorDirective } from "../directives/hear-bar-color/hear-bar-color";

/**
 * 存放所有 Component的信息类
 */

@NgModule({
  declarations: [ClickiPoperComponent, ShowMsgComponent],
  exports: [],
  imports: [
    IonicPageModule.forChild(ClickiPoperComponent),
    IonicPageModule.forChild(ShowMsgComponent),
  ]
})
export class ComponentsModule {
}
