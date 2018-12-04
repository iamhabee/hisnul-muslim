import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AzkarPage, RobanaPage, MedicinesPage } from '../page';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  goToMedicines(){
    this.navCtrl.push(MedicinesPage)
  }

  goToAzkar(){
    this.navCtrl.push(AzkarPage)
  }

  goToRobana(){
    this.navCtrl.push(RobanaPage)
  }
}
