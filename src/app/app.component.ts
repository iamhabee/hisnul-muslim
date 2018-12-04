import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import * as firebase from 'firebase';
//import { HomePage } from '../pages/home/home';
import { HomePage, ContactPage, AboutPage, SplashScreenPage } from '../pages/page';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

constructor(platform: Platform, statusBar: StatusBar,  modalCtrl: ModalController, splashScreen: SplashScreen) {

      // Initialize Firebase
//  var config = {
//     apiKey: "AIzaSyDNAZ_aNjce5I0ltxtsB5O5ba9uISPme94",
//     authDomain: "bookshelves-9fd8f.firebaseapp.com",
//     databaseURL: "https://bookshelves-9fd8f.firebaseio.com",
//     projectId: "bookshelves-9fd8f",
//     storageBucket: "bookshelves-9fd8f.appspot.com",
//     messagingSenderId: "17682799476"
//   };
//   firebase.initializeApp(config);

// const unsubscribes = firebase.auth().onAuthStateChanged((user) => {
//     if(user){
//     this.rootPage=  HomePage;
//     unsubscribes();
//      }else{
//        this.rootPage=LoginPage;
//     unsubscribes();
//      }
  
//   });
platform.ready().then(() => {
  // Okay, so the platform is ready and our plugins are available.
  // Here you can do any higher level native things you might need.
  statusBar.styleDefault();
//      splashScreen.hide();
  let splash = modalCtrl.create(SplashScreenPage);
  splash.present();
});
  
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Profile', component: AboutPage },
      { title: 'Logout', component:  ContactPage}
    ];

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
