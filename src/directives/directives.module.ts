import { NgModule } from "@angular/core"
import { IonicModule } from 'ionic-angular';
import { HearBarColorDirective } from "./hear-bar-color/hear-bar-color";
import { IonicPageModule } from 'ionic-angular';
/**
 * 存放所有 Component的信息类
 */

@NgModule({
  declarations: [HearBarColorDirective],
  exports: [HearBarColorDirective],
})
export class DirectivesModule {
}
