import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeKeyboard, NativeKeyboardOptions } from '@ionic-native/native-keyboard';
import { Keyboard } from "@ionic-native/keyBoard";

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  private nativeOpt: NativeKeyboardOptions;

  mainRoot: any = 'MainPage';
  tab2Root: any = 'FirstPage';
  tab3Root: any = 'ProposalHomePage';
  tab4Root: any = 'FirstPage';
  tab5Root: any = 'MoreFucPage';
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public keyboard: Keyboard) {
    navCtrl.swipeBackEnabled = false;
    //监听键盘弹出事件
    this.keyboard.onKeyboardShow().subscribe(res => {
      let elements = document.querySelectorAll(".tabbar");
      console.log("键盘弹起")
      console.log(res)
      if (elements != null) {
        Object.keys(elements).map((key) => {
          elements[key].style.display = 'none';
        });
      }
    })
    //键盘关闭
    this.keyboard.onKeyboardHide().subscribe(res => {
      console.log("键盘关闭")
      console.log(res)
      setTimeout(() => {
        let elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
          Object.keys(elements).map((key) => {
            elements[key].style.display = 'flex';
          });
        }
      }, 800);
    })
  }
  ionViewWillEnter() {
    this.navCtrl.swipeBackEnabled = false;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
    this.navCtrl.swipeBackEnabled = false;
  }
}

