import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RobanaDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-robana-details',
  templateUrl: 'robana-details.html',
})
export class RobanaDetailsPage {
robana: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.robana = this.navParams.data;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RobanaDetailsPage');
  }

}
