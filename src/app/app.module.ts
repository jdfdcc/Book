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
import { HttpModule } from '@angular/http';
//directives or components
import { ElasticHeader } from '../directives/elastic-header/elastic-header';
import { ImageLoader } from '../directives/image-loader/image-loader';
import { HighlightDirective } from '../directives/highlight/highlight';
//pages
// import { ClickPage } from "../pages/click/click";
// import { PersonInfoPage } from '../pages/person-info/person-info';
import { DbServiceProvider } from '../providers/db-service/db-service';
import { ClickiPoperComponent } from '../components/clicki-poper/clicki-poper';
import { DateUtilsProvider } from '../providers/date-utils/date-utils';
//pipes
import { PipesModule } from "../pipes/pipes.module";

//基础模块
@NgModule({
  declarations: [
    MyApp,
    ElasticHeader,
    ImageLoader,
    HighlightDirective,
    ClickiPoperComponent,
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    PipesModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '' // 配置返回按钮的文字  
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ClickiPoperComponent,
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
  ]
})
export class AppModule { }
