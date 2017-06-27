import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from "../../../providers/json-data/data";
import { NativeKeyboard } from '@ionic-native/native-keyboard';
/**
 * Generated class for the CustomAddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-custom-add',
  templateUrl: 'custom-add.html',
})
export class CustomAddPage {
  personObj: Object = {
    fleet: ""
  };
  // inputS:Array<any> = [1,23,5,5,5,5,5,5,55,,5,5,5,5,5,5,5,5,5,5,5,5,2,5];
  fleetCode: Array<any> = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private data: Data,
    private nativeKeyboard: NativeKeyboard) {
  }

  ionViewDidLoad() {
  }
  /**
   * 即将进入页面
   */
  ionViewWillEnter() {
    let that = this;
    //获取码表
    this.data.getCode().then((data: any) => {
      that.fleetCode = data.fleetCode;
    })
  }
  /**
   * 上传头像接口
   */
  uploadHeard() {
    console.log("敬请期待");
  }
  /**
   * 保存数据
   */
  save() {
    console.log(this.personObj);
  }
}
