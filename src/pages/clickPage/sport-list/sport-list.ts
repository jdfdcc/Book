import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbServiceProvider } from "../../../providers/db-service/db-service";
import { Data } from "../../../providers/data/data";
import { UtilsProvider } from "../../../providers/utils/utils";

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
  sportList: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public DBservice: DbServiceProvider,
    private dateService: Data,
    private utilsProvider: UtilsProvider) {

  }

  ionViewDidLoad() {
    this.searchSportList(null);
  }

  /**
   * 查询运动列表
   * @param {obj}刷新或者加载更多对象
   */
  searchSportList(obj) {
    if (this.utilsProvider.isWeb) {
      let that = this;
      // this.searchSportList(null);
      that.dateService.getSportList().then(function (res: Array<any>) {
        console.log(res)
        that.sportList = that.sportList.concat(res);
        if (obj) obj.complete();
      });
    } else {
      let sql = "select * from sportDB";
      this.DBservice.queryList(sql, (list) => {
        this.sportList = this.sportList.concat(list);
        if (obj) obj.complete();
      });

    }
  }
  /**
   * 下拉刷新
   */
  doRefresh(refresher) {
    this.sportList = [];
    console.log("下拉刷新");
    this.searchSportList(refresher);
  }
  /**
   * 删除记录 
   */
  delete(item) {

  }
  /**
   * 点击 tab进行操作
   */
  toDetail(type) {
    console.log(type)
  }
  /**
   * 加载更多
   * @param  
   */
  doInfinite(infiniteScroll) {
    this.searchSportList(infiniteScroll);

  }


}