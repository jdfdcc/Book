import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { JAlertProvider } from "../../providers/j-alert/j-alert";
import { DbServiceProvider } from "../../providers/db-service/db-service";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alert: JAlertProvider,
    private DBService: DbServiceProvider,
    private popoverCtrl: PopoverController) {
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
    this.DBService.query((list) => {
      console.log(list);
    });
    // this.alert.alert("小猿们正在努力开发中...");
    let popover = this.popoverCtrl.create(ClickiPoperComponent, {
      dataList: [{ id: "1", text: "运动列表" }], callback: callbck
    }, {
        enableBackdropDismiss: false,
        // showBackdrop
      });
    popover.present({
      ev: $event
    });

    popover.onWillDismiss((value) => {

    });
    //回调函数
    function callbck(res) {
      console.log(res)
      // popover.dismiss();
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


