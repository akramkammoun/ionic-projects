import { CameraMock } from './../mock/camera-mock';
import { Component } from '@angular/core';

import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-my-camera',
  templateUrl: 'my-camera.html',
})
export class MyCameraPage {

  image: string;

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(private camera: Camera) {

  }

  takePicture() {
    // const c = new CameraMock();
    // c.getPicture(this.options).then((imageData) => {
    //   this.image = 'data:image/jpeg;base64,' + imageData;
    // });
    this.camera.getPicture(this.options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData;
    });
  }
}
