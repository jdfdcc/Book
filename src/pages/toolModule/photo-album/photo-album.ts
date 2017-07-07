import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * 相册展示
 */
@IonicPage()
@Component({
  selector: 'page-photo-album',
  templateUrl: 'photo-album.html',
})
export class PhotoAlbumPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotoAlbumPage');
  }

}
