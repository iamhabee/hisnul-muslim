import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicinesDetailsPage } from './medicines-details';

@NgModule({
  // declarations: [
  //   MedicinesDetailsPage,
  // ],
  imports: [
    IonicPageModule.forChild(MedicinesDetailsPage),
  ],
})
export class MedicinesDetailsPageModule {}
