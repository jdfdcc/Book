import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the ClickiPoperComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'clicki-poper',
  templateUrl: 'clicki-poper.html'
})
export class ClickiPoperComponent {
  selected: any;
  dataList: any;

  constructor(private viewCtrl: ViewController) {
    this.dataList = viewCtrl.data.dataList;
  }
  //选择
  chooseItem(selectedItem) {
    this.viewCtrl.data.callback(selectedItem);
  }

}

