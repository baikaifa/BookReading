import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OriginatePage } from './originate';

@NgModule({
  declarations: [
    OriginatePage,
  ],
  imports: [
    IonicPageModule.forChild(OriginatePage),
  ],
})
export class OriginatePageModule {}
