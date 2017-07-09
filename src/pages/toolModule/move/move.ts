import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MovePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-move',
  templateUrl: 'move.html',
})
export class MovePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovePage');
    //开启移动
    this.startDrag();
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter DscrolltoolPage');
  }

  startDrag() {
    // let ele = document.getElementById("move"), xCha, yCha, canMvie = false;
    // ele.addEventListener("mousedown", e => {
    //   // ele.setAttribute("position", "fixed");
    //   ele.style.position = "fixed";
    //   canMvie = true;
    //   xCha = e.clientX - ele.offsetLeft;
    //   yCha = e.clientY - ele.offsetTop;
    //   ele.addEventListener("mousemove", e => {
    //     if (canMvie) {
    //       ele.style.left = e.clientX - xCha + 'px'
    //       ele.style.top = e.clientY - yCha + 'px'
    //     }
    //   });
    // });
    // document.addEventListener("mouseup", e => {
    //   canMvie = false;
    //   console.log(e)
    //   ele.removeEventListener("mousemove", function () {
    //     alert(123)
    //   }, false)
    // });

  }

}
