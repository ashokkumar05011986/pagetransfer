import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionsheetPage } from './../actionsheet/actionsheet';
import { AlertpagecodePage } from './../Alertcode/alertpagecode/alertpagecode';
import { ButtonspagePage } from './../buttonspage/buttonspage';
import { CardpagecodePage } from './../Cardcode/cardpagecode/cardpagecode';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) 
  {

  }
actionsheetPage()
{
this.navCtrl.push(ActionsheetPage);
}
alertpagePage()
{
this.navCtrl.push(AlertpagecodePage);
}
buttonspagePage()
{
this.navCtrl.push(ButtonspagePage);
}
cardpagePage()
{
this.navCtrl.push(CardpagecodePage);
}
}
