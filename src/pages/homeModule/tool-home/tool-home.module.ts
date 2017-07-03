import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToolHomePage } from './tool-home';

@NgModule({
  declarations: [
    ToolHomePage,
  ],
  imports: [
    IonicPageModule.forChild(ToolHomePage),
  ],
  exports: [
    ToolHomePage
  ]
})
export class ToolHomePageModule {}
