import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DateUtilsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DateUtilsProvider {

  constructor() {
    console.log('Hello DateUtilsProvider Provider');
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

}
