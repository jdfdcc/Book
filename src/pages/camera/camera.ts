import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: "page-camera",
  templateUrl: 'camera.html'
})
export class CameraPage {
  imgList;
  constructor(private camera: Camera) {
    this.imgList = [];
  }
  //拍照
  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.imgList.push(base64Image);
      console.log(base64Image);
    }, (err) => {
      // Handle error
    });
  }
}
