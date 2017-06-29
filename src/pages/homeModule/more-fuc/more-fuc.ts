import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from "../../../providers/json-data/data";
/**
 * Generated class for the MoreFucPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-more-fuc',
  templateUrl: 'more-fuc.html',
})
export class MoreFucPage {
  private moreList: Array<any> = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public jsonData: Data
  ) {
  }


  /**
  * 即将进入页面
  */
  ionViewWillEnter() {
    let that = this;
    that.jsonData.getJson("data").then(function (res: any) {
      console.log(res.moreObj)
      that.moreList = res.moreObj;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoreFucPage');
  }

}
