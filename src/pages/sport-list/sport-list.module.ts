import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SportListPage } from './sport-list';

@NgModule({
  declarations: [
    SportListPage,
  ],
  imports: [
    IonicPageModule.forChild(SportListPage),
  ],
  exports: [
    SportListPage
  ]
})
export class SportListPageModule {}
