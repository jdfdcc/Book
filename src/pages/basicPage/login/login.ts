import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JAlertProvider } from "../../../providers/j-alert/j-alert";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  name: string = "";
  password: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, private Jalert: JAlertProvider) {
    this.name = "admin";
    this.password = "123456";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  /**
   * 登陆方法
   */
  toLogin() {
    if (this.name === "admin" && this.password === "123456") {
      this.navCtrl.push("ClickPage");
    } else {
      this.Jalert.alertMsg(['用户名或者密码不正确！'])
    }

  }
}
