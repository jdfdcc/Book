import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoreFucPage } from './more-fuc';
import { DirectivesModule } from "../../../directives/directives.module";

@NgModule({
  declarations: [
    MoreFucPage,
  ],
  imports: [
    DirectivesModule,
    IonicPageModule.forChild(MoreFucPage),
  ],
  exports: [
    MoreFucPage
  ]
})
export class MoreFucPageModule {}
