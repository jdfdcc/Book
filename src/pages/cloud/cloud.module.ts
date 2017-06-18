import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CloudPage } from './cloud';

@NgModule({
  declarations: [
    CloudPage,
  ],
  imports: [
    IonicPageModule.forChild(CloudPage),
  ],
  exports: [
    CloudPage
  ]
})
export class CloudPageModule {}
