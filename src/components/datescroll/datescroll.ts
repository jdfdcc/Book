import { Component, ViewChild } from '@angular/core';

/**
 * Generated class for the DatescrollComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'datescroll',
  templateUrl: 'datescroll.html'
})
export class DatescrollComponent {
  @ViewChild('content') content;
  @ViewChild('leftCats') leftItems;
  private _dateList: Array<any> = [];
  private _weekList: Array<string> = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
  private _chooseId: string = "0";

  constructor() {
    for (let i = -50; i <= 50; i++) {
      let date = new Date();
      date.setDate(date.getDate() + i)
      this._dateList.push(date);
    }
  }
  ngOnInit() {
    console.log("dateScroll")
  }
  /**
   * 转化成星期
   */
  toWeek(date: Date) {
    return this._weekList[date.getDay()];
  }
  /**
   * 滚动
   */
  scroll() {
    //I want to scroll the left pane here
    console.log('scroll');
    // this.leftItems.scrollElement.scrollTop += 50; // Change This Line
  }
  /**
   * 选中
   * @param index 选择ID
   */
  chooseDate(index: string) {
    this._chooseId = index;
  }
}
