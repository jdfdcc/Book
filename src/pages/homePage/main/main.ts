import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController ,App} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { ClickiPoperComponent } from "../../../components/clicki-poper/clicki-poper";

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
    private statusBar: StatusBar,
    private popoverCtrl:PopoverController,
    private app:App) {
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

  /**
   * dia
   */
  openMenu($event) {
    let getRootNav = this.app.getRootNav();
    // this.DBService.query((list) => {
    //   console.log(list);
    // });
    // this.alert.alert("小猿们正在努力开发中...");
    let popover = this.popoverCtrl.create(ClickiPoperComponent, {
      dataList: [{
        id: "1", text: "打卡", url: "ClickPage",icon:"md-alarm"
      }], callback: callbck
    });
    popover.present({
      ev: $event
    });

    popover.onWillDismiss((value) => {

    });
    //回调函数
    function callbck(item) {
      getRootNav.push(item.url, {}, {
        animate: true,
        animation: "md-transition"
      });
      popover.dismiss();
    }
  }

}
