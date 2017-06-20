import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

/**
 * Generated class for the MainPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  isAndroid: boolean = true;
  tabsList: Array<any> = [];
  choosed: string = 'home';
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private statusBar: StatusBar) {
    navCtrl.swipeBackEnabled = false;
    this.tabsList = [{
      id: "home", text: "首页"
    }, {
      id: "forward", text: "前端"
    }, {
      id: "ios", text: "ios"
    }, {
      id: "andorid", text: "安卓"
    }, {
      id: "design", text: "设计"
    }, {
      id: "read", text: "阅读"
    }]

  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad MainPage');
    this.statusBar.styleDefault();
    this.navCtrl.swipeBackEnabled = false;
  }
  /**
   * 将要离开的时候
   */
  ionViewWillLeave() {
    this.statusBar.backgroundColorByName("white");
  }
  /**
   * 选择tab
   * @param item OBJ
   */
  chooseTab(item) {
    this.choosed = item.id;
  }

}
