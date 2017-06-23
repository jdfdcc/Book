import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomAddPage } from './custom-add';

@NgModule({
  declarations: [
    CustomAddPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomAddPage),
  ],
  exports: [
    CustomAddPage
  ]
})
export class CustomAddPageModule {}
