import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoreFucPage } from './more-fuc';

@NgModule({
  declarations: [
    MoreFucPage,
  ],
  imports: [
    IonicPageModule.forChild(MoreFucPage),
  ],
  exports: [
    MoreFucPage
  ]
})
export class MoreFucPageModule {}
