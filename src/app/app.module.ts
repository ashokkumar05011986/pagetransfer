import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ActionsheetPage } from '../pages/actionsheet/actionsheet';
import { AlertpagecodePage } from '../pages/Alertcode/alertpagecode/alertpagecode';
import { BasicalertsPage } from '../pages/Alertcode/basicalerts/basicalerts';
import { PromptalertPage } from '../pages/Alertcode/promptalert/promptalert';
import { ConfirmationalertPage } from '../pages/Alertcode/confirmationalert/confirmationalert';
import { RadioalertPage } from '../pages/Alertcode/radioalert/radioalert';
import { CheckboxalertPage } from '../pages/Alertcode/checkboxalert/checkboxalert';
import {ButtonspagePage } from '../pages/buttonspage/buttonspage';
import {CardpagecodePage } from '../pages/Cardcode/cardpagecode/cardpagecode';
import { BasiccardPage } from '../pages/Cardcode/Basiccard/Basiccard';
import { CardheaderPage } from '../pages/Cardcode/Cardheader/Cardheader';
import { CardlistPage } from '../pages/Cardcode/Cardlist/Cardlist';
import { CardimagesPage } from '../pages/Cardcode/Cardimages/Cardimages';
import { CardbackgroundimagesPage } from '../pages/Cardcode/cardbackgroundimages/cardbackgroundimages';
import { AdvancedcardmapPage } from '../pages/Cardcode/advancedcardmap/advancedcardmap';
import { AdvancedcardsocialPage } from '../pages/Cardcode/advancedcardsocial/advancedcardsocial';
import { AdvancedcardweatherPage } from '../pages/Cardcode/advancedcardweather/advancedcardweather';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	ActionsheetPage,
	AlertpagecodePage,
	BasicalertsPage,
	PromptalertPage,
	ConfirmationalertPage,
	RadioalertPage,
	CheckboxalertPage,
	ButtonspagePage,
	CardpagecodePage,
	BasiccardPage,
	CardheaderPage,
	CardlistPage,
	CardimagesPage,
	CardbackgroundimagesPage,
	AdvancedcardmapPage,
	AdvancedcardsocialPage,
	AdvancedcardweatherPage
	
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	ActionsheetPage,
	AlertpagecodePage,
	BasicalertsPage,
	PromptalertPage,
	ConfirmationalertPage,
	RadioalertPage,
	CheckboxalertPage,
	ButtonspagePage,
	CardpagecodePage,
	BasiccardPage,
	CardheaderPage,
	CardlistPage,
	CardimagesPage,
	CardbackgroundimagesPage,
	AdvancedcardmapPage,
	AdvancedcardsocialPage,
	AdvancedcardweatherPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
