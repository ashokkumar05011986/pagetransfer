import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasicalertsPage } from './basicalerts';

@NgModule({
  declarations: [
    BasicalertsPage,
  ],
  imports: [
    IonicPageModule.forChild(BasicalertsPage),
  ],
})
export class BasicalertsPageModule {}
