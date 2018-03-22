import { Component } from '@angular/core';

import { OffersPage } from '../offers/offers';
import { PaymentPage } from '../payment/payment';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = OffersPage;
  tab3Root = PaymentPage;

  constructor() {

  }
}
