import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { JAlertProvider } from "../../providers/j-alert/j-alert";
import { DbServiceProvider } from "../../providers/db-service/db-service";
import { ClickiPoperComponent } from "../../components/clicki-poper/clicki-poper";

/**
 * Generated class for the ClickPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-click',
  templateUrl: 'click.html',
})
export class ClickPage {
  clickFlag: boolean = true;
  time: any = 0;
  interTime: any;
  heartString: Array<string> = [];
  contentString: string = "梦想总是要有的，万一实现了呢。";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alert: JAlertProvider,
    private DBService: DbServiceProvider,
    private popoverCtrl: PopoverController) {
    //初始化页面数据
    this.heartString.push("自己打败自己是最可悲的失败，自己战胜自己是最可贵的胜利。");
    this.heartString.push("成功就是把复杂的问题简单化，然后狠狠去做。");
    this.heartString.push("生命太过短暂，今天放弃了明天不一定能得到。");
    this.heartString.push("付出就要赢得回报，这是永恒的真理，自古以来很少有人能突破它。然而，如果有人能够超越它的限制，付出而不求回报，那么他一定会得到得更多。");
    this.heartString.push("业精于勤而荒于嬉，行成于思而毁于随。");
    this.heartString.push("最常见的勇气就是在日常生活中做到诚实和正直，能够抵制诱惑，敢于讲真话，表现自己真实的一面，而不要虚伪造作。");
    this.heartString.push("成功的信念在人脑中的作用就如闹钟，会在你需要时将你唤醒。");
    this.heartString.push("让生活的句号圈住的人，是无法前时半步的。");
    this.heartString.push("好习惯的养成，在于不受坏习惯的诱惑。");
    this.heartString.push("梦想总是要有的，万一实现了呢。");
    this.contentString = this.heartString[Math.round(Math.random()*10)];
  }
  //初始化数据库
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClickPage');
  }
  /**
   * 点击开始
   */
  clickStart() {
    if (this.clickFlag) {
      this.timeOption(this.clickFlag);
      this.clickFlag = false;
    } else {
      this.timeOption(this.clickFlag);
      this.clickFlag = true;
    }

  }
  /**
   * 结束运动
   */
  clickEnd() {
    //暂停时间
    this.timeOption(false);
    this.alert.confirm('当前运动' + this.time + '秒，确定结束运动！', '提示', (res) => {
      if (res) {
        this.DBService.insert(this.time, (res) => {
        });
      } else {
        this.timeOption(true);
      }
    })
  }
  /**
   * 更多功能展示
   */
  presentPopover($event) {
    let navCtrl = this.navCtrl;
    // this.DBService.query((list) => {
    //   console.log(list);
    // });
    // this.alert.alert("小猿们正在努力开发中...");
    let popover = this.popoverCtrl.create(ClickiPoperComponent, {
      dataList: [{ id: "1", text: "运动列表" }, { id: "2", text: "Error页面" }], callback: callbck
    });
    popover.present({
      ev: $event
    });

    popover.onWillDismiss((value) => {

    });
    //回调函数
    function callbck(res) {
      switch (res.id) {
        //跳转至运动列表
        case "1":
          navCtrl.push('SportListPage', {}, {
            animate: true,
            animation: "md-transition"
          });
          break;
        //跳转至失败页面
        case "2":
          navCtrl.push('ErrorPage', {}, {
            animate: true,
            animation: "md-transition"
          });
          break;

        default:
          break;
      }

      popover.dismiss();
    }
  }
  /**
   * 时间开始计时或者停止
   * @param flag boolean
   */
  timeOption(flag) {
    flag ? this.interTime = setInterval(() => {
      this.time++;
    }, 1000) : clearInterval(this.interTime);
  }

}


