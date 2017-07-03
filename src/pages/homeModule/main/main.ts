import { Component, trigger, state, style, animate, transition, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, App, Content } from 'ionic-angular';
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
  @ViewChild(Content) content: Content;
  private showTab: boolean = false;//是否显示滚到到顶部
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private statusBar: StatusBar,
    private popoverCtrl: PopoverController,
    private app: App,
    public cd: ChangeDetectorRef) {

  }
  ionViewWillEnter() {
  }
  /**
   * 将要离开的时候
   */
  ionViewWillLeave() {
  }

  scrollHandler(e) {
    this.showTab = e.scrollTop >= 400;
    this.cd.detectChanges();
  }
  /**
   * 滚到顶部
   */
  toTop() {
    this.showTab = false;
    this.content.scrollToTop();
  }
}
