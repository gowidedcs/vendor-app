import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TakeSendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-take-send',
  templateUrl: 'take-send.html',
})
export class TakeSendPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  popThis(){
    this.navCtrl.pop();
  }
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad TakeSendPage');
  }

}
