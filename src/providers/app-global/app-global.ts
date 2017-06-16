import { Injectable } from '@angular/core';

/*
  Generated class for the AppGlobal provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AppGlobal {
  private static instance: AppGlobal = new AppGlobal();
  /**是否是调试状态 */
  isDebug: boolean = true;
  rootUrl: string = this.isDebug ? "http://localhost" : "http://www.xxx.com";
  pageSize: number = 10;
  constructor() {
    if (AppGlobal.instance) {
      throw new Error("错误: 请使用AppGlobal.getInstance() 代替使用new.");
    }
    AppGlobal.instance = this;
  }
  /**
   * 获取当前实例
   * @static
   * @returns {AppGlobal}
   */
  public static getInstance(): AppGlobal {
    return AppGlobal.instance;
  }

}
