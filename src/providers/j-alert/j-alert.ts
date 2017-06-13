import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';


/*
  Generated class for the JAlertProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class JAlertProvider {

  constructor(public alertCtrl: AlertController) {
  }
  //提示框
  alert(str = "没有提示信息！", title = "提示", callback = () => { }, enableBackdropDismiss: boolean = false) {
    let alert = this.alertCtrl.create({
      enableBackdropDismiss: enableBackdropDismiss,
      title: title,
      subTitle: str,
      buttons: ['确定']
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

}
