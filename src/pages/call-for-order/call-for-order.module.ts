import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CallForOrderPage } from './call-for-order';

@NgModule({
  declarations: [
    CallForOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(CallForOrderPage),
  ],
})
export class CallForOrderPageModule {}
