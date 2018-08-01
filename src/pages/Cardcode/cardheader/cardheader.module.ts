import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardheaderPage } from './cardheader';

@NgModule({
  declarations: [
    CardheaderPage,
  ],
  imports: [
    IonicPageModule.forChild(CardheaderPage),
  ],
})
export class CardheaderPageModule {}
