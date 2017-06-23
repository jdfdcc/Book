import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, App } from 'ionic-angular';
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
  personList: Array<any> = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private statusBar: StatusBar,
    private popoverCtrl: PopoverController,
    private app: App) {
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
    }];
    //人物列表
    this.personList = [{
      name: "佩罗娜",
      introduction: "“幽灵公主”佩罗娜是漫画作品《海贼王》中的角色。佩罗娜是王下七武海月光·莫利亚的干部之一、恐怖咆哮三怪人之一、动物僵尸与吓人僵尸的指挥官。两年后为索隆送行，继续与鹰眼米霍克一起在克拉伊咖那岛居住。",
      charmNum: "10",
      ability: "100",
      heard_img:"1.jpg"
    },{
      name: "罗罗诺亚·索隆",
      introduction: "草帽海贼团中的三大战斗力之一，使用三把刀战斗的三刀流剑士，二年前超新星11人之一。爱喝酒，爱睡觉，讲义气，但却很路痴。和山治是死对头。为了小时候与古伊娜的约定而踏上了前往世界第一剑士的道路，随后成为主角蒙奇·D·路飞的第一个伙伴。在初次败给世界第一剑士“鹰眼米霍克”后向路飞发誓永不再败，并且更加努力的锻炼自己。在鹰眼的帮助训练下，两年后的他成功与伙伴们汇合，并且为了实现自己的梦想，奔赴强者如云的新世界。",
      charmNum: "10",
      ability: "100",
      heard_img:"2.png"
    }];

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
    console.log("I,m leaving")
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
        id: "1", text: "创建群聊", url: "ClickPage", icon: "ios-people-outline"
      }, {
        id: "1", text: "新增客户", url: "CustomAddPage", icon: "ios-person-add-outline"
      }, {
        id: "1", text: "拍摄", url: "ClickPage", icon: "ios-reverse-camera-outline"
      }, {
        id: "1", text: "面对面快传", url: "ClickPage", icon: "ios-paper-outline"
      }, {
        id: "1", text: "打卡", url: "ClickPage", icon: "ios-settings-outline"
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
