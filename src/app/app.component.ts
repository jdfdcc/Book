import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'ClickPage';
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, storage: Storage) {
    // storage.get('firstIn').then((result) => {
    //   if (result) {
    //     this.rootPage = "Welcome";
    //   }
    //   else {
    //     storage.set('firstIn', true);
    //     this.rootPage = 'ClickPage';
    //   }
    //   setTimeout(function () {
    //     splashScreen.hide();
    //   }, 1000);
    // });
    platform.ready().then(() => {
      // statusBar.styleDefault();
      statusBar.backgroundColorByName("white");
      //初始化数据信息
      // sqLite.create({
      //   name: 'data.db',
      //   location: 'default'
      // })
    });
  }
}
