import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearhPage } from './searh';

@NgModule({
  declarations: [
    SearhPage,
  ],
  imports: [
    IonicPageModule.forChild(SearhPage),
  ],
})
export class SearhPageModule {}
