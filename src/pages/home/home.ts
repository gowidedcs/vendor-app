import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WritePage } from '../write/write';
import { TakeSendPage} from '../take-send/take-send';
import { CallForOrderPage} from '../call-for-order/call-for-order';
import { BasicPage } from '../searchbars/basic/pages'
import { TodosPage } from '../todos/todos';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  items: string[];
  constructor(public navCtrl: NavController) {
    
  }

  openWriteList(){
    this.navCtrl.push(TodosPage);
}

  openWritePage(){
      this.navCtrl.push(WritePage);
  }

 

  openTakeSendPic(){
    this.navCtrl.push(TakeSendPage);
} 

openCallForOrder(){
  this.navCtrl.push(CallForOrderPage);
}

initializeItems(){
this.navCtrl.push(BasicPage);
}
 

}
