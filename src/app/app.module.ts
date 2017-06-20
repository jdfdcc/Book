import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { SQLite } from '@ionic-native/sqlite';
//providers
import { AppGlobal } from '../providers/app-global/app-global'
import { Data } from '../providers/data/data';
import { JAlertProvider } from '../providers/j-alert/j-alert';
import { DbServiceProvider } from '../providers/db-service/db-service';
import { DateUtilsProvider } from '../providers/date-utils/date-utils';
import { UtilsProvider } from '../providers/utils/utils';
//directives or components
import { ComponentsModule } from "../components/components.module";
//pipes
import { PipesModule } from "../pipes/pipes.module";
import { StorageService } from '../providers/storage-service/storage-service';
// import { Welcome } from "../pages/welcome/welcome";
//使用httpModel
import { HttpModule } from '@angular/http';



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
    IonicModule.forRoot(MyApp, {
      backButtonText: '' // 配置返回按钮的文字  
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppGlobal,
    Camera,
    Data,
    JAlertProvider,
    DbServiceProvider,
    SQLite,
    DateUtilsProvider,
    StorageService,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UtilsProvider,
    UtilsProvider,
  ]
})
export class AppModule { }
