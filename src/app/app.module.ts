import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';

import { BasicPage } from '../pages/searchbars/basic/pages';
import { WritePage } from '../pages/write/write';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { PaymentPage } from '../pages/payment/payment';
import { OffersPage } from '../pages/offers/offers';

import { Camera } from '@ionic-native/camera';
import { CallNumber } from '@ionic-native/call-number';
import { ImagePicker } from '@ionic-native/image-picker';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import * as firebase from 'firebase';
import { UsersService } from '../providers/usersservice/usersservice';
//import { Http, HttpModule } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule, Http } from '@angular/http';





 // Initialize Firebase
 export const config ={
  apiKey: "AIzaSyBqFTgcu-K2y_sRW2IbmS_xn3Nn8X8-eME",
  authDomain: "test-login-e3e47.firebaseapp.com",
  databaseURL: "https://test-login-e3e47.firebaseio.com",
  projectId: "test-login-e3e47",
  storageBucket: "",
  messagingSenderId: "746703287079"
};
firebase.initializeApp(config);
export function createTranslateLoader(Http) {
  return new TranslateHttpLoader(Http ,'assets/data', '.json');
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    //ListPage,
    WritePage,
    BasicPage,
    TabsPage,
    OffersPage,
    PaymentPage,  
    AboutPage,
    ContactPage,
   LoginPage,
   SignupPage
   
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot(),
    IonicModule.forRoot(MyApp),
    HttpModule, 
     TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    //ListPage,
    WritePage,
    BasicPage,
    TabsPage,
    OffersPage,
    PaymentPage,
    AboutPage,
    ContactPage,
    LoginPage,
    SignupPage
 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    CallNumber,
    ImagePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersService,
  
  ]
})
export class AppModule {}
