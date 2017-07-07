import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, Renderer, ElementRef } from '@angular/core';
import { ViewController, App } from 'ionic-angular';
import { UtilsProvider } from "../../providers/utils/utils";

/**
 * 图标 百度 echart
 */
declare var echarts;
@Component({
    selector: 'charts',
    // templateUrl: 'charts.html',
    template: `<div style="height:400px;width:100%" id="{{_id}}"></div>`
})
export class ChartsComponent {
    @Input("option") _opt: any;//基础配置信息
    _id: string;//基础配置信息
    _myChart: any;//图标对象

    constructor(viewCtrl: ViewController,
        private _renderer: Renderer,
        public _elementRef: ElementRef,
        private utils: UtilsProvider) {
        // _renderer.setElementAttribute(_elementRef.nativeElement, "id", this._chartId);
        this._id = utils.uuid();
    }
    /**
     * 初始化数据
     */
    ngAfterViewInit() {
        this._myChart = echarts.init(document.getElementById(this._id));
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
        this._opt && this._myChart && this._myChart.setOption(this._opt);
    }
}
