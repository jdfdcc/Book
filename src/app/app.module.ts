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

//directives or 

//native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { SQLite } from '@ionic-native/sqlite';
import { Contacts } from "@ionic-native/contacts";




//基础模块
@NgModule({
  declarations: [
    MyApp,
    
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicStorageModule.forRoot(),
    //存放所有管道集合
    PipesModule,
    //存放所有控件集合
    ComponentsModule,
    //所有providers
    ProvidersModule,
    IonicModule.forRoot(MyApp, {
      platforms: {
        android: {
          backButtonText: "",
          // backButtonIcon: "md-arrow-back",
          // iconMode: "md",
          // modalEnter: "modal-md-slide-in",
          // modalLeave: "modal-md-slide-out",
          // pageTransition: "md",
        },
        ios: {
          backButtonText: "返回",
          // backButtonIcon: "ios-arrow-back",
          // iconMode: "ios",
          // modalEnter: "modal-ios-slide-in",
          // modalLeave: "modal-ios-slide-out",
          // pageTransition: "ios",
          mode: "ios",
          tabsHideOnSubPages: "true"
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
  ]
})
export class AppModule { }
