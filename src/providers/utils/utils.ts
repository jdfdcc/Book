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
    // (this.platform.is("ios") || this.platform.is("andorid")) && !this.platform.is("mobileweb")
    return false;
  }
  /**
   * 
   * @param len 长度
   * @param radix 基数
   */
  uuid(len = 11, radix = 10) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [], i;
    radix = radix || chars.length;

    if (len) {
      // Compact form
      for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
    } else {
      // rfc4122, version 4 form
      var r;

      // rfc4122 requires these characters
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';

      // Fill in random data.  At i==19 set the high bits of clock sequence as
      // per rfc4122, sec. 4.1.5
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
        }
      }
    }

    return uuid.join('');
  }
}
