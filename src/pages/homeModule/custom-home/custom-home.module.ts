import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomHomePage } from './custom-home';

@NgModule({
  declarations: [
    CustomHomePage,
  ],
  imports: [
    IonicPageModule.forChild(CustomHomePage),
  ],
  exports: [
    CustomHomePage
  ]
})
export class CustomHomePageModule {}
