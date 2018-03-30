import { Component } from '@angular/core';
import { NavController,AlertController, ActionSheetController, Platform} from 'ionic-angular';
import { WritePage } from '../write/write';
import { BasicPage } from '../searchbars/basic/pages'

import { Camera, CameraOptions } from '@ionic-native/camera';
import { CallNumber } from '@ionic-native/call-number';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  items: string[];
  constructor(public navCtrl: NavController,
              private camera: Camera,
              public alertCtrl: AlertController,
              private callNumber: CallNumber,
              public actionsheetCtrl: ActionSheetController,
              public platform: Platform,
              private imagePicker: ImagePicker ) {
  }

  openWritePage(){
      this.navCtrl.push(WritePage);
  }



  initializeItems(){
      this.navCtrl.push(BasicPage);
  }
 
  onTakePicture() {    
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true
    }
  
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log("Error");
      this.displayErrorAlert(err);
    });
  
    }

    displayErrorAlert(err){
      let alert = this.alertCtrl.create({
         title: 'Error',
         subTitle: 'Error while trying to capture picture',
         buttons: ['OK']
       });
       alert.present();
  }

  onCallNumber(){
    this.callNumber.callNumber("9742748666", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

    
  openSendPictureMenu(){
    
      let actionSheet = this.actionsheetCtrl.create({
        title: 'List From Gallery or Capture a picture',
//        cssClass: 'action-sheets-basic-page',
        buttons: [
          {
            text: 'Gallery',
            icon: !this.platform.is('ios') ? 'photos' : null,
            handler: () => {
              console.log('Gallery clicked');
              this.gotoImagePicker();
            }
          },
          {
            text: 'Camera',
            icon: !this.platform.is('ios') ? 'camera' : null,
            handler: () => {
              this.onTakePicture();
              console.log('Camera clicked');
            }
          },
          {
            text: 'Cancel',
            role: 'cancel', // will always sort to be on the bottom
            icon: !this.platform.is('ios') ? 'close' : null,
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      actionSheet.present();      
  } 

  gotoImagePicker(){
    const options: ImagePickerOptions = {
      maximumImagesCount:15,
    }
        this.imagePicker.getPictures(options).then((results) => {
        for (var i = 0; i < results.length; i++) {
            console.log('Image URI: ' + results[i]);
        }
      }, (err) => { 
        console.log('Image click error');
      });
  }
}
