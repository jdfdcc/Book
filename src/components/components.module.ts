import { NgModule } from "@angular/core"
import { IonicModule } from 'ionic-angular';

import { ClickiPoperComponent } from './clicki-poper/clicki-poper'

@NgModule({
  declarations: [ClickiPoperComponent],
  exports: [ClickiPoperComponent],
  imports: [
    IonicModule.forRoot(ClickiPoperComponent), // required if the custom component uses ion-icon or other funky ionic business
  ]
})
export class ComponentsModule {
}
