import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//providers
import { ProvidersModule } from "../providers/providers.module";
//components
import { ComponentsModule } from "../components/components.module";
//pipes
import { PipesModule } from "../pipes/pipes.module";
//使用httpModel
import { HttpModule } from '@angular/http';

import { Keyboard } from "@ionic-native/keyBoard";

import { NativeKeyboard } from '@ionic-native/native-keyboard';
//native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { SQLite } from '@ionic-native/sqlite';
import { Contacts } from "@ionic-native/contacts";
// import { LogServiceProvider } from '../providers/log-service/log-service';
// import { DatepickerComponent } from '../components/datepicker/datepicker';

//ainimation
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HearBarColorDirective } from "../directives/hear-bar-color/hear-bar-color";



//基础模块
@NgModule({
  declarations: [
    MyApp,
    
    // DatepickerComponent,
    // HearBarColorDirective
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicStorageModule.forRoot(),
    //存放所有管道集合
    PipesModule,
    //存放所有控件集合
    ComponentsModule,
    // BrowserAnimationsModule,
    //所有providers
    ProvidersModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true,
      inputCloning: true,
      scrollAssist: false,
      autoFocusAssist:false,
      backButtonText: "返回",
      activator: "ripple",
      platforms: {
        android: {
        },
        ios: {
          // backButtonIcon: "ios-arrow-back",
          iconMode: "ios",
          modalEnter: "modal-md-slide-in",
          modalLeave: "modal-md-slide-out",
          activator: "ripple",
          // pageTransition: "ios",
        }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    NativeKeyboard,
    Camera,
    SQLite,
    Contacts,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    // LogServiceProvider,
  ]
})
export class AppModule { }
