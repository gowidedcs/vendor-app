import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CallForOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-call-for-order',
  templateUrl: 'call-for-order.html',
})
export class CallForOrderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  popThis(){
    this.navCtrl.pop();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CallForOrderPage');
  }

}
