import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the Welcome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class Welcome {

  constructor(public navCtr: NavController) {
  }

  goToHome() {
    this.navCtr.setRoot("TabsPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Welcome');
  }

}
