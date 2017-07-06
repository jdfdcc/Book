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
    @Input("title") _title: string = ""; //设置标题
    @Input("xData") _xData: Array<any> = [];//X轴数据
    @Input("yData") _yData: Array<any> = [];//Y轴数据
    _opt: any;//基础配置信息
    _myChart: any;//图标对象
    

    constructor(viewCtrl: ViewController) {
    }
    /**
     * 初始化数据
     */
    ngOnInit() {
        this._myChart = echarts.init(document.getElementById('main'));
        this.initCharts();
    }
    /**
     * 监听数据的变化
     * @param changes 
     */
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

        this._opt = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: 335, name: '直接访问' },
                        { value: 310, name: '邮件营销' },
                        { value: 234, name: '联盟广告' },
                        { value: 135, name: '视频广告' },
                        { value: 1548, name: '搜索引擎' }
                    ]
                }
            ]
        };

        this._myChart && this._myChart.setOption(this._opt);
    }


    click() {
        this._title = "213312";
        console.log(this._title)
    }

}
