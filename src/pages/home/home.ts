import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { JAlertProvider } from '../../providers/j-alert/j-alert'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private jAlertProvider: JAlertProvider) {

  }

  testSingle(str = "网络异常") {
      this.jAlertProvider.alert("我是你大爷");
  }
  ionViewDidLoad() {
  }
  ionViewWillEnter() {
  }

}
