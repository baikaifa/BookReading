import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HitalkPage } from './hitalk';

@NgModule({
  declarations: [
    HitalkPage,
  ],
  imports: [
    IonicPageModule.forChild(HitalkPage),
  ],
})
export class HitalkPageModule {}
