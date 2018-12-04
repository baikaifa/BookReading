import { SousuoPage } from './../sousuo/sousuo';
import { ManhuaPage } from './../manhua/manhua';
import { NanshengPage } from './../nansheng/nansheng';
import { NvshengPage } from './../nvsheng/nvsheng';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// ViewChild
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // @ViewChild('ac') ac;
  icons:string="camera";
  items = [];
  isActive = 0;
  isClick(i){
    this.isActive=i;
  }
  arr=['精选','女生','男生','漫画'];
  constructor(public navCtrl: NavController) {
  }
}

