import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LogServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LogServiceProvider {

  constructor(public http: Http) {
  }
  /**
   * 打印日志 方便日后做日志管理
   * @param str 打印的信息
   * @param level 日志等级
   */
  log(str = "", level = 0) {
    console.log(str)
  }

}
