import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';

import { HomePage, AboutPage, AzkarPage, MedicinesPage, RobanaPage, AzkarDetailsPage, MedicinesDetailsPage, RobanaDetailsPage, ContactPage, SplashScreenPage } from '../pages/page';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage, 
    ContactPage,
    SplashScreenPage,
    AzkarPage, 
    MedicinesPage,
    RobanaPage,
    AzkarDetailsPage, 
    MedicinesDetailsPage, 
    RobanaDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage, 
    ContactPage,
    SplashScreenPage,
    AzkarPage, 
    MedicinesPage,
    RobanaPage,
    AzkarDetailsPage, 
    MedicinesDetailsPage, 
    RobanaDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
