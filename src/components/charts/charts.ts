import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ViewController, App } from 'ionic-angular';

/**
 * 图标 百度 echart
 */
declare var echarts;
@Component({
    selector: 'charts',
    // templateUrl: 'charts.html',
    template: `<div id="main"></div><button (click)="click()">点击</button>`
})
export class ChartsComponent {
    _title: string = ""; //设置标题
    _opt: any;//基础配置信息
    _myChart: any;//图标
    _xData: Array<any> = [];//X轴数据
    _yData: Array<any> = [];//Y轴数据


    /**
     * @input {boolean} If true, scrolling along the X axis is enabled.
     */
    @Input()
    get title() {
        return this._title;
    }
    set title(val: any) {
        this._title = val;
    }
    @Input()
    get xData() {
        return this._xData;
    }
    set xData(val: any) {
        this._xData = val;
    }
    @Input()
    get yData() {
        return this._yData;
    }
    set yData(val: any) {
        this._yData = val;
    }

    constructor(viewCtrl: ViewController) {
    }
    /**
     * 初始化数据
     */
    ngOnInit() {
        console.log("22");
        this._myChart = echarts.init(document.getElementById('main'));
        this.initCharts();
    }
    ngOnChanges(changes: SimpleChanges) {
        this.initCharts();
    }
    /**
     * 初始化图标数据
     */
    initCharts() {
        this._opt = {
            title: {
                text: this._title
            },
            tooltip: {},
            legend: {
                // data: ['销量']
            },
            xAxis: {
                data: this._xData
            },
            yAxis: {},
            series: [{
                name: this._title,
                type: 'bar',
                data: this._yData
            }]
        };
        this._myChart && this._myChart.setOption(this._opt);
    }


    click() {
        this._title = "213312";
        console.log(this._title)
    }

}
