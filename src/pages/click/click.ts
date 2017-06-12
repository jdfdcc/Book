import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JAlertProvider } from "../../providers/j-alert/j-alert";
// import { DbServiceProvider } from "../../providers/db-service/db-service";
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
    private sqlite: SQLite) {
  }
  database: SQLiteObject;
  ngOnInit() {
    this.initDB();
  }
  //初始化数据库
  initDB() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('create table t_log(name VARCHAR(32))', {})
        .then(() => console.log('Executed SQL'))
        .catch(e => console.log(e));
      this.database = db;
      db.executeSql("insert into t_log values('123')", {});
    })
      .catch(e => console.log(e));
  }

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
        let result = this.database.executeSql("select * from t_log", [])
          .then((data) => {
            debugger;
            console.log("select->" + data.rows.item(0).name)
          })
          .catch(e => console.log(e));
      } else {
        this.timeOption(true);
      }
    })
  }
  //显示更多操作
  presentPopover($event) {
    this.alert.alert("小猿们正在努力开发中...");
  }
  // 时间操作
  timeOption(flag) {
    flag ? this.interTime = setInterval(() => {
      this.time++;
    }, 1000) : clearInterval(this.interTime);
  }
}
