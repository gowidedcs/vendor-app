import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    WritePage,
    BasicPage,
    TabsPage,
    OffersPage,
    PaymentPage,  


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    WritePage,
    BasicPage,
    TabsPage,
    OffersPage,
    PaymentPage,
 

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    CallNumber,
    ImagePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
