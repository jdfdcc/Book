import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {
  topData: Array<any>;
  movieData: Array<any>;
  data: any;
  constructor(public http: Http) {
  }
  /**
   *  获取码表数据
   */
  getCode() {
    return new Promise((resolve, reject) => {
      this.http.get('assets/json/code.json').subscribe(res => {
        this.data = res.json();
        resolve(this.data);
      }, err => {
        reject(err);
      });
    })
  }

  //获取运动列表
  getSportList() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/sport_list').subscribe(res => {
        this.data = res.json();
        resolve(this.data);
      }, err => {
        reject(err);
      });
    })
  }

  /**
   * 获取本地JSON文件数据
   * @param jsonName 获取的JSON文件名
   */
  getJson(jsonName) {
    return new Promise((resolve, reject) => {
      this.http.get('assets/json/' + jsonName+".json").subscribe(res => {
        this.data = res.json();
        resolve(this.data);
      }, err => {
        reject(err);
      });
    })
  }

}
