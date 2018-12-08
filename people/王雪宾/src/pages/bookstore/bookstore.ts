import { SousuoPage } from './../sousuo/sousuo';
import { ReadPage } from './../read/read';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// ViewChild
@Component({
  selector: 'page-bookstore',
  templateUrl: 'bookstore.html'
})
export class BookstorePage {
  SousuoPage;
  ReadPage;
  // @ViewChild('ac') ac;
  icons:string="camera";
  items = [];
  isActive = 0;
  isClick(i){
    this.isActive=i;
  }
  arr=['精选','女生','男生','漫画'];
  constructor(public navCtrl: NavController) {
    this.SousuoPage = SousuoPage;
    this.ReadPage = ReadPage;
  }
  gosearch(){
    //跳转到指定页面
    this.navCtrl.push(SousuoPage);
  }
  goread(){
    this.navCtrl.push(ReadPage);
  }
}

