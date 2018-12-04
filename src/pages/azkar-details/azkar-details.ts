import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AzkarDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-azkar-details',
  templateUrl: 'azkar-details.html',
})
export class AzkarDetailsPage {
azkar: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.azkar = this.navParams.data;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AzkarDetailsPage');
  }

}
