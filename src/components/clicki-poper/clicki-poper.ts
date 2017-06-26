import { Component } from '@angular/core';
import { ViewController, App, NavController } from 'ionic-angular';

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
  navCtrl: NavController;
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
    this.navCtrl.push(item.url);
    // this.app.getRootNav().push(item.url, {}, {
    //   animate: true,
    //   animation: "md-transition"
    // });
    // let elements = document.querySelectorAll(".tabbar");
    // if (elements != null) {
    //   Object.keys(elements).map((key) => {
    //     elements[key].style.display = 'none';
    //   });
    // }
    // this.app.getRootNav().push(item.url);
    // this.selected = selectedItem;
    // this.viewCtrl.data.callback(selectedItem);
  }

}

