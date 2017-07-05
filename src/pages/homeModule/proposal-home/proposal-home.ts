import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { trigger, state, style, animate, transition } from '@angular/animations';

/**
 * Generated class for the ProposalHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-proposal-home',
  templateUrl: 'proposal-home.html',
  // animations: [
  //   trigger('colorState', [
  //     state('active', style({
  //       background: 'red'
  //     })),
  //     state('inactive', style({
  //       background: 'blue'
  //     })),
  //     transition('active => inactive', animate('500ms ease-in')),
  //     transition('inactive => active', animate('500ms ease-out'))
  //   ])
  // ]
})
export class ProposalHomePage {
  isActive: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    setInterval(() => {
      this.isActive = !this.isActive;
    }, 1000)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProposalHomePage');
  }

}
