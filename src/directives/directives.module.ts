import { NgModule } from "@angular/core"
import { IonicModule } from 'ionic-angular';
import { HearBarColorDirective } from "./hear-bar-color/hear-bar-color";
import { IonicPageModule } from 'ionic-angular';
import { JdfDragDirective } from "./jdf-drag/jdf-drag";
/**
 * 存放所有 Component的信息类
 */

@NgModule({
  declarations: [HearBarColorDirective, JdfDragDirective],
  exports: [HearBarColorDirective, JdfDragDirective],
})
export class DirectivesModule {
}
