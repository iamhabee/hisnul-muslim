import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
/**
 * Generated class for the SplashScreenPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-splash-screen',
  templateUrl: 'splash-screen.html',
})
export class SplashScreenPage {

  constructor(public viewCtrl: ViewController, public splashScreen: SplashScreen) {
    
     }
    
     ionViewDidEnter() {
    
       this.splashScreen.hide();
    
       setTimeout(() => {
         this.viewCtrl.dismiss();
       }, 4000);
    
     }
    
   }