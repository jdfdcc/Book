import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the IntToTimePipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'intToTime',
})
export class IntToTimePipe implements PipeTransform {
  /**
   * 秒转换成时间
   * @param 秒数
   */
  transform(value: any) {
    let h = 0, m = 0, s = 0;
    h = Math.floor(value / 60 / 60)
    m = Math.floor(value / 60)
    s = value % 60;
    return (m < 10 ? "0" + m : m) + "分" + (s < 10 ? "0" + s : s)+"秒";
  }
}
