import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasicalertsPage } from './../basicalerts/basicalerts';
import { PromptalertPage } from './../promptalert/promptalert';
import { ConfirmationalertPage } from './../confirmationalert/confirmationalert';
import { RadioalertPage } from './../radioalert/radioalert';
import { CheckboxalertPage } from './../checkboxalert/checkboxalert';
/**
 * Generated class for the AlertpagecodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alertpagecode',
  templateUrl: 'alertpagecode.html',
})
export class AlertpagecodePage {

  constructor(public navCtrl: NavController) 
  {

  }
basicPage()
{
this.navCtrl.push(BasicalertsPage);
}
checkboxPage()
{
this.navCtrl.push(CheckboxalertPage);
}

confirmPage()
{
this.navCtrl.push(ConfirmationalertPage);
}

promptpagePage()
{
this.navCtrl.push(PromptalertPage);
}

radioPage()
{
this.navCtrl.push(RadioalertPage);
}

}
