import { Component, trigger, state, style, animate, transition, ViewChild, ElementRef } from '@angular/core';
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
  templateUrl: 'main.html'
})
export class MainPage {
  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;
  private state: string = "fuck";
  private isAndroid: boolean = true;
  private tabsList: Array<any> = [];
  private choosed: string = 'home';
  private personList: Array<any> = [];
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
      name: "香克斯",
      introduction: "香克斯，日本漫画《海贼王》中的角色，外号“红发”。原为海贼王罗杰船员，后自己成立海贼团，经过自己不断的努力与变强，最终成为了伟大航路后半段“新世界”中君临天下的“四皇”之一。拥有强大的霸王色霸气，也精于剑术。同时也是主角路飞自小就尊敬的人 。",
      charmNum: "10",
      ability: "100",
      imgUrl: "assets/img/one-piece/1.jpeg"
    }, {
      name: "蒙奇·D·路飞",
      introduction: "蒙奇·D·路飞是在漫画及改编动画《海贼王》中登场的虚拟角色，男主角，草帽海贼团船长。梦想是找到传说中的One Piece，成为海贼王。",
      charmNum: "10",
      ability: "100",
      imgUrl: "assets/img/one-piece/2.jpeg"
    }, {
      name: "罗罗诺亚·索隆",
      introduction: "草帽海贼团中的三大战斗力之一，使用三把刀战斗的三刀流剑士，二年前超新星11人之一。爱喝酒，爱睡觉，讲义气，但却很路痴。和山治是死对头。为了小时候与古伊娜的约定而踏上了前往世界第一剑士的道路，随后成为主角蒙奇·D·路飞的第一个伙伴。在初次败给世界第一剑士“鹰眼米霍克”后向路飞发誓永不再败，并且更加努力的锻炼自己。在鹰眼的帮助训练下，两年后的他成功与伙伴们汇合，并且为了实现自己的梦想，奔赴强者如云的新世界。",
      charmNum: "10",
      ability: "100",
      imgUrl: "assets/img/one-piece/3.png"
    }, {
      name: "文斯莫克·山治",
      introduction: "山治（サンジ，Sanji）是日本人气漫画《航海王》中的主要角色之一。草帽海贼团厨师，金发，有着卷曲眉毛，永远遮住半边脸的家伙，香烟不离口，最爱女人，很花心但很有风度，海贼中的绅士。小时候跟随大海贼红脚哲普学习厨艺。踢技以快准狠被海军称之为“黑足”，但从不愿意伤害任何的女性，哪怕是敌人。在经过司法岛一战后也成了悬赏对象，首次悬赏就有7700万之高（但通缉令是画上去的）。梦想是找到传说之海All Blue而跟随路飞一同进入了伟大航路。是文斯莫克家族的第三子。",
      charmNum: "10",
      ability: "100",
      imgUrl: "assets/img/one-piece/4.jpg"
    }, {
      name: "佩罗娜",
      introduction: "“幽灵公主”佩罗娜是漫画作品《海贼王》中的角色。佩罗娜是王下七武海月光·莫利亚的干部之一、恐怖咆哮三怪人之一、动物僵尸与吓人僵尸的指挥官。两年后为索隆送行，继续与鹰眼米霍克一起在克拉伊咖那岛居住。",
      charmNum: "10",
      ability: "100",
      imgUrl: "assets/img/one-piece/5.jpg"
    },];

  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad MainPage');
    this.statusBar.styleDefault();
    // this.statusBar.overlaysWebView(false);
    // this.statusBar.backgroundColorByName("black");
    // #0F0F0F
    // this.statusBar.backgroundColorByHexString('#0F0F0F');
  }
  /**
   * 将要离开的时候
   */
  ionViewWillLeave() {
    console.log("I,m leaving")
    this.statusBar.styleLightContent();
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
    let that = this;
    // let popover = this.popoverCtrl.create(PopoverPage, {
    //   contentEle: this.content.nativeElement,
    //   textEle: this.text.nativeElement
    // });

    let popover = this.popoverCtrl.create(ClickiPoperComponent, {
      navCtrl: this.navCtrl,
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
      }]
    });
    popover.present({
      ev: $event
    });
    //即将消失的时候进行的操作
    // popover.onWillDismiss(function (item) {
    //   item && item.url && that.navCtrl.push(item.url);
    // });
  }
  /**
   * 跳转到任务详情
   */
  toDetail(item) {
    this.navCtrl.push("CustomerDetailPage", { cus: item });
  }
}
