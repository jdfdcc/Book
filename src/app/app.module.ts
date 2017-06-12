import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
//providers
import { AppGlobal } from '../providers/app-global'
import { Data } from '../providers/data';
import { JAlertProvider } from '../providers/j-alert/j-alert';
//directives or components
import { ElasticHeader } from '../directives/elastic-header/elastic-header';
import { ImageLoader } from '../directives/image-loader/image-loader';
import { HighlightDirective } from '../directives/highlight/highlight';
//pages
import { PersonInfoPage } from '../pages/person-info/person-info';
import { DbServiceProvider } from '../providers/db-service/db-service';
//pipes
//基础模块
@NgModule({
  declarations: [
    MyApp,
    ElasticHeader,
    ImageLoader,
    HighlightDirective,
    PersonInfoPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PersonInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppGlobal,
    Camera,
    Data,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    JAlertProvider,
    DbServiceProvider,
    SQLite
  ]
})
export class AppModule { }
