import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * 客户详情页面
 * create by 江道丰 on 2017年06月28日
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-customer-detail',
  templateUrl: 'customer-detail.html',
})
export class CustomerDetailPage {
  private cusDetail: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cusDetail = navParams.data.cus;
    console.log(this.cusDetail)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerDetailPage');
  }

  /**
   * 页面跳转
   */
  toDetail(type) {
    if (type === "back") {
      this.navCtrl.pop()
    }
  }

}
