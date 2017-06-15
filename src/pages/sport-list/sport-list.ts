import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbServiceProvider } from "../../providers/db-service/db-service";

/**
 * Generated class for the SportListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sport-list',
  templateUrl: 'sport-list.html',
})
export class SportListPage {
  soprtList: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public DBservice: DbServiceProvider) {
  }

  ionViewDidLoad() {
    this.searchSportList();
  }

  /**
   * 查询运动列表
   */
  searchSportList() {
    let sql = "select * from sportDB";
    this.DBservice.queryList(sql, (list) => {
      this.soprtList = list;
    });
  }
}
