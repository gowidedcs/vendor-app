import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TakeSendPage } from './take-send';

@NgModule({
  declarations: [
    TakeSendPage,
  ],
  imports: [
    IonicPageModule.forChild(TakeSendPage),
  ],
})
export class TakeSendPageModule {}
