import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClickiPoperComponent } from './clicki-poper';

@NgModule({
  declarations: [
    ClickiPoperComponent,
  ],
  imports: [
    IonicPageModule.forChild(ClickiPoperComponent),
  ],
  exports: [
    ClickiPoperComponent
  ]
})
export class ClickiPoperComponentModule {}
