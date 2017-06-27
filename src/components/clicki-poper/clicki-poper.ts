import { Component } from '@angular/core';
import { ViewController, App } from 'ionic-angular';

/**
 * Generated class for the ClickiPoperComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'clicki-poper',
  templateUrl: 'clicki-poper.html'
})
export class ClickiPoperComponent {
  contentEle: any;
  textEle: any;
  selected: any;
  dataList: any;
  navCtrl: any;
  constructor(
    private viewCtrl: ViewController,
    // public navCtrl: NavController,
    private app: App) {
    if (!viewCtrl.data.navCtrl) {
      console.error("请传入页面的NavController")
    }
    this.dataList = viewCtrl.data.dataList;
    this.navCtrl = viewCtrl.data.navCtrl;
  }

  //
  // } 
  // ngOnInit() {
  //   if (this.navParams.data) {
  //     this.contentEle = this.navParams.data.contentEle;
  //     this.textEle = this.navParams.data.textEle;

  //     this.background = this.getColorName(this.contentEle.style.backgroundColor);
  //     this.setFontFamily();
  //   }
  /**
   * 选择选项卡
   * @param item 
   */
  chooseItem(item) {
    this.viewCtrl.dismiss(item);
  }


}

