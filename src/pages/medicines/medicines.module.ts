import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicinesPage } from './medicines';

@NgModule({
  // declarations: [
  //   MedicinesPage,
  // ],
  imports: [
    IonicPageModule.forChild(MedicinesPage),
  ],
})
export class MedicinesPageModule {}
