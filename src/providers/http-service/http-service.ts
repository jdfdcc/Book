import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { StorageService } from "../storage-service/storage-service";

@Injectable()
export class HttpService {
  myInfoLocal: any;
  local: Storage;
  constructor(
    private http: Http,
    private storageService: StorageService) {
    //this.local = new Storage(LocalStorage);
  }
  /**
   * 发送get请求（需要用户信息）
   * @param url 请求地址 
   */
  public httpGetWithAuth(url: string) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', "");
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options).toPromise()
      .then(res => res.json())
      .catch(err => {
        this.handleError(err);
      });
  }
  /**
   * 发送get请求（无需登录人信息）
   * @param url 请求地址
   */
  public httpGetNoAuth(url: string) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options).toPromise()
      .then(res => res.json())
      .catch(err => {
        this.handleError(err);
      });
  }
  /**
   * 发送post请求（无需登录人信息）
   * @param url 请求地址
   */
  public httpPostNoAuth(url: string, body: any) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, body, options).toPromise()
      .then(res => res.json())
      .catch(err => {
        this.handleError(err);
      });
  }
  /**
   * 发送post请求（需登录人信息）
   * @param url 请求地址
   */
  public httpPostWithAuth(body: any, url: string) {
    return this.myInfoLocal = this.local.getJson('UserInfo')
      .then((result) => {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', result.ID + '-' + result.UserToken);
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, body, options).toPromise();
      });
  }

  /**
   * 处理请求错误方法
   * @param error 错误信息
   */
  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
}