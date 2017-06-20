import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AlertController, ModalController } from 'ionic-angular';
import { ShowMsgComponent } from "../../components/show-msg/show-msg";


/*
  Generated class for the JAlertProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class JAlertProvider {

  constructor(public alertCtrl: AlertController, private modelCtrl: ModalController) {
  }
  //提示框
  alert(str = "没有提示信息！", title = "提示", callback = () => { }, enableBackdropDismiss: boolean = false) {
    let alert = this.alertCtrl.create({
      enableBackdropDismiss: enableBackdropDismiss,
      title: title,
      subTitle: str,
      buttons: [{
        text: 'Ok',
        handler: () => {
          // begin the alert's dismiss transition
          // let navTransition = alert.dismiss();
          callback();
          return false;
        }
      }]
    });
    alert.present();
  }
  //确认框
  confirm(str = "没有提示信息！", title = "提示", callback = (flag: boolean) => { }, btnArray = ["取消", "确定"], enableBackdropDismiss: boolean = false) {
    let confirm = this.alertCtrl.create({
      enableBackdropDismiss: enableBackdropDismiss,
      title: title,
      message: str,
      buttons: [
        {
          text: btnArray[0],
          handler: () => {
            callback(false);
          }
        },
        {
          text: btnArray[1],
          handler: () => {
            callback(true);
          }
        }
      ]
    });
    confirm.present();
  }
  /**
   * 
   * @param str 
   * @param title 
   * @param callback 
   * @param btnArray 
   * @param enableBackdropDismiss 
   */
  alertMsg(msgList: Array<string> = [], title = "提示", callback = (flag: boolean) => { }, btnArray = ["取消", "确定"], enableBackdropDismiss: boolean = false) {
    let msgModal = this.modelCtrl.create(ShowMsgComponent, { msgList: msgList, callback: callback }, {
    });
    msgModal.present();
  }
}
