import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the ShowMsgComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'show-msg',
  templateUrl: 'show-msg.html'
})
export class ShowMsgComponent {

  title: string = "提示";
  msgList;

  constructor(private viewCtrl: ViewController) {
    this.msgList = this.viewCtrl.data.msgList;
  }
  /**
   * 关闭弹出页面
   */
  close() {
    //回调函数
    this.viewCtrl.data.callback();
    this.viewCtrl.dismiss();
  }

}
