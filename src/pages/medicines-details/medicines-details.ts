import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MedicinesDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicines-details',
  templateUrl: 'medicines-details.html',
})

export class MedicinesDetailsPage {
  robana: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.robana = this.navParams.data;    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicinesDetailsPage');
  }

}
