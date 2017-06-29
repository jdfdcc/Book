import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  mainRoot: any = 'MainPage';
  tab2Root: any = 'FirstPage';
  tab3Root: any = 'FirstPage';
  tab4Root: any = 'FirstPage';
  tab5Root: any = 'MoreFucPage';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    navCtrl.swipeBackEnabled = false;
  }
  ionViewWillEnter() {
    this.navCtrl.swipeBackEnabled = false;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
    this.navCtrl.swipeBackEnabled = false;
  }

}
