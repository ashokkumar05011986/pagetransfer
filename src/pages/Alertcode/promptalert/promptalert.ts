import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the PromptalertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-promptalert',
  templateUrl: 'promptalert.html',
})
export class PromptalertPage {
	title1: string;

  constructor(public alertCtrl: AlertController) { }

  doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
			  this.title1=data.title;
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}
