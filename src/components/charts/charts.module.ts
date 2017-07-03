import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChartsComponent } from './charts';

@NgModule({
  declarations: [
    ChartsComponent,
  ],
  imports: [
    IonicPageModule.forChild(ChartsComponent),
  ],
  exports: [
    ChartsComponent
  ]
})
export class ChartsComponentModule {}
