import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the OffersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})
export class OffersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Offer Sheet!',
      subTitle: 'Do You Want To Create New Offers Sheet....!',
     
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
          {
          text: 'OK',
          handler:() =>{
      this.presentActionSheet()
          },
          
        }]
    });

    alert.present();
  }


  presentActionSheet()
  {
    this.navCtrl.push(OffersPage);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OffersPage');
  }
  
}
