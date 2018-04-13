import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Config } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController } from 'ionic-angular';
//import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { LoginPage } from '../pages/login/login';
import * as firebase from 'firebase';
import { TranslateService } from '@ngx-translate/core';
import { PaymentPage } from '../pages/payment/payment';
import { Http } from '@angular/http';



@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  details: any=[];
  @ViewChild(Nav) nav: Nav;
  items = this.details;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    translate: TranslateService, config: Config,
    public navCtrl: NavController,public http:Http) {


    this.initializeApp();
    this.testget();
 
var that =this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        that.rootPage = LoginPage;
        // ...
      } else {
        // User is signed out.
        // ...
        that.rootPage = LoginPage;
      }
    });

    translate.setDefaultLang('en');
    translate.use('en')

    translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: TabsPage },
      { title: 'About', component: AboutPage},
      { title: 'Contact', component: ContactPage}
      //{ title: 'List', component: ListPage }
     

    ];

  }


  
  onLoadSale(){
    this.navCtrl.push(PaymentPage);
  }
  testget(){
    console.log("testget");
     this.http.get('payment/pay.json').map(res=>res.json()).subscribe(data=>{
       this.items=data;
       console.log(data.image);
     });   
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
}
