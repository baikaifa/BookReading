import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WanjiePage } from './wanjie';

@NgModule({
  declarations: [
    WanjiePage,
  ],
  imports: [
    IonicPageModule.forChild(WanjiePage),
  ],
})
export class WanjiePageModule {}
