import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { DirectivesModule } from "../../../directives/directives.module";


@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    DirectivesModule,
    IonicPageModule.forChild(LoginPage),
  ],
  exports: [
    LoginPage,
  ],
  entryComponents: []
})
export class LoginPageModule { }
