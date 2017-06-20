import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

/*
  Generated class for the UtilsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UtilsProvider {

  constructor(public platform: Platform) {
    console.log('Hello UtilsProvider Provider');
  }
  /**
   * 判断是否为Web模式
   */
  isWeb() {
    return (this.platform.is("ios") || this.platform.is("andorid")) && !this.platform.is("mobileweb");
  }
}
