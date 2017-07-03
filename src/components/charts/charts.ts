import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ViewController, App } from 'ionic-angular';
/**
 * Generated class for the ChartsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
declare var echarts;
@Component({
    selector: 'charts',
    templateUrl: 'charts.html'
})
export class ChartsComponent {
    @Input() opt: any;
    private myChart: any;
    constructor(viewCtrl: ViewController) {
        console.log(viewCtrl);
    }
    /**
     * 初始化数据
     */
    ngOnInit() {
        // this.navParams.data;
        this.myChart = echarts.init(document.getElementById('main'));
        // 使用刚指定的配置项和数据显示图表。
        // myChart.setOption(this.opt);
    }

    // ngOnChanges(changes: SimpleChanges) {
    //    console.dir(changes['opt']);
    //    this.opt && this.myChart.setOption(this.opt);
    // }
    ngOnChanges(changes: SimpleChanges) {
        console.dir(changes);
        this.opt && this.myChart.setOption(this.opt); 
    }

}
