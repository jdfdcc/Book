import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DateUtilsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DateUtilsProvider {

  private CalendarData = new Array(100);
  private madd = new Array(12);
  private tgString = "甲乙丙丁戊己庚辛壬癸";
  private dzString = "子丑寅卯辰巳午未申酉戌亥";
  private numString = "一二三四五六七八九十";
  private monString = "正二三四五六七八九十冬腊";
  private weekString = "日一二三四五六";
  private sx = "鼠牛虎兔龙蛇马羊猴鸡狗猪";
  private cYear;
  private cMonth;
  private cDay;
  private TheDate;


  constructor() {
    console.log('Hello DateUtilsProvider Provider');
    this.CalendarData = new Array(0xA4B, 0x5164B, 0x6A5, 0x6D4, 0x415B5, 0x2B6, 0x957, 0x2092F, 0x497, 0x60C96, 0xD4A, 0xEA5, 0x50DA9, 0x5AD, 0x2B6, 0x3126E, 0x92E, 0x7192D, 0xC95, 0xD4A, 0x61B4A, 0xB55, 0x56A, 0x4155B, 0x25D, 0x92D, 0x2192B, 0xA95, 0x71695, 0x6CA, 0xB55, 0x50AB5, 0x4DA, 0xA5B, 0x30A57, 0x52B, 0x8152A, 0xE95, 0x6AA, 0x615AA, 0xAB5, 0x4B6, 0x414AE, 0xA57, 0x526, 0x31D26, 0xD95, 0x70B55, 0x56A, 0x96D, 0x5095D, 0x4AD, 0xA4D, 0x41A4D, 0xD25, 0x81AA5, 0xB54, 0xB6A, 0x612DA, 0x95B, 0x49B, 0x41497, 0xA4B, 0xA164B, 0x6A5, 0x6D4, 0x615B4, 0xAB6, 0x957, 0x5092F, 0x497, 0x64B, 0x30D4A, 0xEA5, 0x80D65, 0x5AC, 0xAB6, 0x5126D, 0x92E, 0xC96, 0x41A95, 0xD4A, 0xDA5, 0x20B55, 0x56A, 0x7155B, 0x25D, 0x92D, 0x5192B, 0xA95, 0xB4A, 0x416AA, 0xAD5, 0x90AB5, 0x4BA, 0xA5B, 0x60A57, 0x52B, 0xA93, 0x40E95);
    this.madd[0] = 0;
    this.madd[1] = 31;
    this.madd[2] = 59;
    this.madd[3] = 90;
    this.madd[4] = 120;
    this.madd[5] = 151;
    this.madd[6] = 181;
    this.madd[7] = 212;
    this.madd[8] = 243;
    this.madd[9] = 273;
    this.madd[10] = 304;
    this.madd[11] = 334;
  }
  /**
   * 日期格式化
   * @param date 
   * @param format
   */
  dateToSting(date: Date = new Date(), format: string = "yyyy-MM-dd") {
    let tempDate = new Date(date);
    let year = tempDate.getFullYear();
    let month = tempDate.getMonth() < 10 ? '0' + (tempDate.getMonth() + 1) : (tempDate.getMonth() + 1);
    let day = tempDate.getDate() < 10 ? '0' + tempDate.getDate() : tempDate.getDate();
    return year + '-' + month + '-' + day;
  }

  /**
   * 获取农历日期
   * @param solarYear 年
   * @param solarMonth 月
   * @param solarDay 日
   */
  GetLunarDay(date: Date = new Date()) {

    let list = this.dateToSting(date).split("-");
    let solarYear = parseInt(list[0]),
      solarMonth = parseInt(list[2]),
      solarDay = parseInt(list[2]);
    //solarYear = solarYear<1900?(1900+solarYear):solarYear;
    if (solarYear < 1921 || solarYear > 2020) {
      return "";
    } else {
      solarMonth = (solarMonth> 0) ? (solarMonth - 1) : 11;
      this.e2c(solarYear, solarMonth, solarDay);//solarYear, solarMonth, solarDay
      return this.GetcDateString();
    }
  }


  GetBit(m, n) {
    return (m >> n) & 1;
  }

  e2c(y, mm, d) {
    // this.TheDate = (arguments.length != 3) ? new Date() : new Date(arguments[0], arguments[1], arguments[2]);
    this.TheDate = new Date(y, mm, d);
    let total, m, n, k;
    let isEnd = false;
    let tmp = this.TheDate.getYear();
    if (tmp < 1900) {
      tmp += 1900;
    }
    total = (tmp - 1921) * 365 + Math.floor((tmp - 1921) / 4) + this.madd[this.TheDate.getMonth()] + this.TheDate.getDate() - 38;

    if (this.TheDate.getYear() % 4 == 0 && this.TheDate.getMonth() > 1) {
      total++;
    }
    for (m = 0; ; m++) {
      k = (this.CalendarData[m] < 0xfff) ? 11 : 12;
      for (n = k; n >= 0; n--) {
        if (total <= 29 + this.GetBit(this.CalendarData[m], n)) {
          isEnd = true;
          break;
        }
        total = total - 29 - this.GetBit(this.CalendarData[m], n);
      }
      if (isEnd) break;
    }
    this.cYear = 1921 + m;
    this.cMonth = k - n + 1;
    this.cDay = total;
    if (k == 12) {
      if (this.cMonth == Math.floor(this.CalendarData[m] / 0x10000) + 1) {
        this.cMonth = 1 - this.cMonth;
      }
      if (this.cMonth > Math.floor(this.CalendarData[m] / 0x10000) + 1) {
        this.cMonth--;
      }
    }
  }
  GetcDateString() {
    let year = "", month = "", day = "";
    year += this.tgString.charAt((this.cYear - 4) % 10);
    year += this.dzString.charAt((this.cYear - 4) % 12);
    year += "(";
    year += this.sx.charAt((this.cYear - 4) % 12);
    year += ")年 ";
    if (this.cMonth < 1) {
      month += "(闰)";
      month += this.monString.charAt(-this.cMonth - 1);
    } else {
      month += this.monString.charAt(this.cMonth - 1);
    }
    month += "月";
    day += (this.cDay < 11) ? "初" : ((this.cDay < 20) ? "十" : ((this.cDay < 30) ? "廿" : "三十"));
    if (this.cDay % 10 != 0 || this.cDay == 10) {
      day += this.numString.charAt((this.cDay - 1) % 10);
    }
    return { year, month, day };
  }
}
