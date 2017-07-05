import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html',
})
export class ChartPage {
  option: any;
  chartTitle: string = "";
  yData: Array<any> = [1, 2, 3, 4, 5, 6, 7];
  constructor(public navCtrl: NavController, public navParams: NavParams, public cd: ChangeDetectorRef) {
  }

  ionViewDidLoad() {
    // 指定图表的配置项和数据
    let that = this;

    setTimeout(function () {
      that.chartTitle = "起床时间";
    }, 2000);
  }

  click() {
    console.log(this.chartTitle)
  }
}
