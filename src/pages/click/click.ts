import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JAlertProvider } from "../../providers/j-alert/j-alert";
import { DbServiceProvider } from "../../providers/db-service/db-service";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite'

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
    private DBService: DbServiceProvider) {
  }
  //初始化数据库
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClickPage');
  }
  //打卡时间
  clickStart() {
    if (this.clickFlag) {
      this.timeOption(this.clickFlag);
      this.clickFlag = false;
    } else {
      this.timeOption(this.clickFlag);
      this.clickFlag = true;
    }

  }
  //保存当天跑步记录
  clickEnd() {
    //暂停时间
    this.timeOption(false);
    this.alert.confirm('当前运动' + this.time + '秒，确定结束运动！', '提示', (res) => {
      if (res) {
        this.DBService.insert(this.time);
      } else {
        this.timeOption(true);
      }
    })
  }
  //显示更多操作
  presentPopover($event) {
    this.DBService.query();
    this.alert.alert("小猿们正在努力开发中...");
  }
  // 时间操作
  timeOption(flag) {
    flag ? this.interTime = setInterval(() => {
      this.time++;
    }, 1000) : clearInterval(this.interTime);
  }
}
