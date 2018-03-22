import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Scroll } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BasicPage } from '../pages/searchbars/basic/pages';
import { WritePage } from '../pages/write/write';
import { TakeSendPage } from '../pages/take-send/take-send';
import { CallForOrderPage } from '../pages/call-for-order/call-for-order'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { PaymentPage } from '../pages/payment/payment';

import { OffersPage } from '../pages/offers/offers';
import { TodosPage } from '../pages/todos/todos';
import { AddPage } from '../pages/add/add';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    WritePage,
    TakeSendPage,
    CallForOrderPage,
    BasicPage,
    TabsPage,
    OffersPage,
    PaymentPage,
    TodosPage,
    AddPage

  


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
    TakeSendPage,
    CallForOrderPage,
    BasicPage,
    TabsPage,
    OffersPage,
    PaymentPage,
    TodosPage,
    AddPage
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
