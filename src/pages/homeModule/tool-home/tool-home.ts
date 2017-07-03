import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from "../../../providers/json-data/data";

/**
 * Generated class for the ToolHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tool-home',
  templateUrl: 'tool-home.html',
})
export class ToolHomePage {
  private toolList: Array<any> = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public jsonData: Data) {
  }

  ionViewDidLoad() {
    let that = this;
    that.jsonData.getJson("data").then(function (res: any) {
      that.toolList = res.toolList;
    })
  }

}
