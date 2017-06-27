import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { NativeKeyboard } from '@ionic-native/native-keyboard';

import { Keyboard } from "@ionic-native/keyBoard";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'TabsPage';
  // rootPage: any = '';
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    storage: Storage, keyboard: Keyboard) {
    storage.get('firstIn').then((result) => {
      // if (result) {
      //   this.rootPage = "WelcomePage";
      // }
      // else {
      //   this.rootPage = 'WelcomePage';
      // }
      // setTimeout(function () {
      //   splashScreen.hide();
      // }, 1000);
    });
    platform.ready().then(() => {
      // statusBar.styleDefault();
      statusBar.overlaysWebView(true);
      statusBar.backgroundColorByName("white");
      // keyboard.disableScroll(false);
      // keyboard.hideKeyboardAccessoryBar(false);
      //初始化数据信息
      // sqLite.create({
      //   name: 'data.db',
      //   location: 'default'
      // })
    });
  }
}
