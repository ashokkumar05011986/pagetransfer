import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasiccardPage } from './../Basiccard/Basiccard';
import { CardheaderPage } from './../Cardheader/Cardheader';
import { CardlistPage } from './../Cardlist/Cardlist';
import { CardimagesPage } from './../Cardimages/Cardimages';
import { CardbackgroundimagesPage } from './../cardbackgroundimages/cardbackgroundimages';
import { AdvancedcardmapPage } from './../advancedcardmap/advancedcardmap';
import { AdvancedcardsocialPage } from './../advancedcardsocial/advancedcardsocial';
import { AdvancedcardweatherPage } from './../advancedcardweather/advancedcardweather';
/**
/**
 * Generated class for the CardpagecodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cardpagecode',
  templateUrl: 'cardpagecode.html',
})
export class CardpagecodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  BasicCardsPage()
{
this.navCtrl.push(BasiccardPage);
}
CardHeadersPage()
{
this.navCtrl.push(CardheaderPage);
}

CardListsPage()
{
this.navCtrl.push(CardlistPage);
}

CardImagesPage()
{
this.navCtrl.push(CardimagesPage);
}

BackgroundImagesPage()
{
this.navCtrl.push(CardbackgroundimagesPage);
}
AdvancedCardsmapPage()
{
this.navCtrl.push(AdvancedcardmapPage);
}
AdvancedCardssocialPage()
{
this.navCtrl.push(AdvancedcardsocialPage);
}
AdvancedCardsweatherPage()
{
this.navCtrl.push(AdvancedcardweatherPage);
}
}
