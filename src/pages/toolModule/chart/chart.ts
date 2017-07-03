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
  constructor(public navCtrl: NavController, public navParams: NavParams, public cd: ChangeDetectorRef) {
  }

  ionViewDidLoad() {
    // 指定图表的配置项和数据
    this.option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    };
    let that = this;
    setTimeout(function () {
      that.option.title.text="21312312";
      console.log("改变了");
    }, 2000);
  }


}
