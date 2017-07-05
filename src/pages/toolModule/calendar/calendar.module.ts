import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarPage } from './calendar';
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
  declarations: [
    CalendarPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CalendarPage),
  ],
  exports: [
    CalendarPage
  ]
})
export class CalendarPageModule {}
