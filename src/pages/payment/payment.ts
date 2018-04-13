import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';



@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})

/**
 * export class yourService {

  patdata: any;
  data: any;
  yourService: any;
  myjsondata: any;
    constructor(public http:Http) {
      this.yourService.getData().subscribe((data) => {
        console.log("what is in the data ", data);
        this.myjsondata = data;
      });
      this.yourService.load().then((data) => {
        console.log("what is in the data ", data);
        this.patdata= data;
      });


    }

    load() {
      console.log('json called');
      return new Promise(resolve => {
          this.http.get('pages/Payment/pay.json').map(response => {
              this.data = response.json();
              resolve(this.data);
          });
      });
  }

getData() {
    return this.http.get("pages/Payment/pay.json")
        .map((res:Response) => res.json().details); //records in this case
  }
}
*/

@Injectable()
export class PaymentPage {
  details: any=[];
  items = this.details;
  handleError(arg0: any): any {
    throw new Error("Method not implemented.");
  }
 
  
    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http ) {

/**this.yourService.getData().subscribe((data) => {
      console.log("what is in the data ", data);
      this.myjsondata = data;
    });
    this.yourService.load().then((data) => {
      console.log("what is in the data ", data);
      this.patdata= data;
    });
 * 
 */
    

    
        /**
         *  var json = {
      mainId: 42,
      firstMember: {
          id: 1337
      },
      secondMember: {
          id: -1
      }
    };

    var instance = new ExampleClass().deserialize(json);
    console.log(instance);
         * 
         */
}

/**
 * load() {
  console.log('json called');
  return new Promise(resolve => {
      this.http.get('pages/Payment/pay.json').map(response => {
          this.data = response.json();
          resolve(this.data);
      });
  });
}

getData() {
return this.http.get("pages/Payment/pay.json")
    .map((res:Response) => res.json().details); //records in this case
}
 */



my_data: any ;

  public onLoadSale() : Promise<any> {
      if(typeof(this.my_data) === "undefined") {
            return this.http.get('payment/pay.json')
            .toPromise().then(res => {

                                  this.my_data = res.json().response;
                                  return this.my_data;
                }).catch(this.handleError);
      } else {
          return Promise.resolve(this.my_data);
      }

  }

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }
}

/**
 * interface Serializable<T> {
  deserialize(input: Object): T;
}

class Member implements Serializable<Member> {
  id: number;

  deserialize(input) {
      this.id = input.id;
      return this;
  }
}

class ExampleClass implements Serializable<ExampleClass> {
  mainId: number;
  firstMember: Member;
  secondMember: Member;

  deserialize(input) {
      this.mainId = input.mainId;

      this.firstMember = new Member().deserialize(input.firstMember);
      this.secondMember = new Member().deserialize(input.secondMember);

      return this;
  }
}
 * 
 */







/**
 * var characters = [
    {
      name: 'Rama',
      PhoneNo: '9876543210',
      Amount: '10000',
      ModeOfPayments:'Paytm',
      Date: '01/02/18',
    },

    
    {
      name: 'Shama',
      PhoneNo: '0123456789',
      Amount: '20000',
      ModeOfPayments:'Cash',
      Date: '02/03/18',
    },
    {
      name: 'Bhama',
      PhoneNo: '3692580147',
      Amount: '30000',
      ModeOfPayments:'CreditCard',
      Date: '03/04/18',      
    },
    {
    name: 'Rama',
      PhoneNo: '9876543210',
      Amount: '10000',
      ModeOfPayments:'DebitCard',
      Date: '01/02/18',
    },
  ];
 


 * 
 */