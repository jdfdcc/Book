import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonInfoPage } from './person-info';
import { HighlightDirective } from '../../directives/highlight/highlight';
@NgModule({
  declarations: [
    PersonInfoPage,
    HighlightDirective
  ],
  imports: [
    IonicPageModule.forChild(PersonInfoPage),
  ],
  exports: [
    PersonInfoPage
  ]
})
export class PersonInfoPageModule { }
