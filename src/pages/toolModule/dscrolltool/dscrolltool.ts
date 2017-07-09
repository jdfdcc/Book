import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DscrolltoolPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dscrolltool',
  templateUrl: 'dscrolltool.html',
})
export class DscrolltoolPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DscrolltoolPage');
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter DscrolltoolPage');
  }


}
