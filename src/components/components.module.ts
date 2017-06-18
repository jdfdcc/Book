import { NgModule } from "@angular/core"
import { IonicPageModule } from 'ionic-angular';
import { ClickiPoperComponent } from './clicki-poper/clicki-poper';

/**
 * 存放所有 Component的信息类
 */

@NgModule({
  declarations: [ClickiPoperComponent],
  exports: [ClickiPoperComponent],
  imports: [
    // required if the custom component uses ion-icon or other funky ionic business
    IonicPageModule.forChild(ClickiPoperComponent), 
    
  ]
})
export class ComponentsModule {
}
