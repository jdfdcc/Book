import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from "../../../providers/json-data/data";

/**
 * Generated class for the ProposalListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-proposal-list',
  templateUrl: 'proposal-list.html',
})
export class ProposalListPage {
  private shopList: Array<any> = [];
  private chooseIndex: number = 0;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private dataUtil: Data) {
  }

  ionViewDidLoad() {
    let that = this;
    this.dataUtil.getCode().then((data: any) => {
      that.shopList = data.shopCode;
    })
  }
  /**
   * 选中某个点
   * @param index 选中的标志位
   */
  chooseItem(index){
    this.chooseIndex = index;
  }

}
