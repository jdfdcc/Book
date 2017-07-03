import { Component, trigger, state, style, animate, transition, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { ClickiPoperComponent } from "../../../components/clicki-poper/clicki-poper";


/**
 * Generated class for the MainPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private statusBar: StatusBar,
    private popoverCtrl: PopoverController,
    private app: App) {

  }
  ionViewWillEnter() {
  }
  /**
   * 将要离开的时候
   */
  ionViewWillLeave() {
  }
  
  scrollHandler(e) {
    console.log(e.scrollTop)
  }
}
