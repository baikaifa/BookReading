import { BookstorePage } from './../bookstore';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BangdanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bangdan',
  templateUrl: 'bangdan.html',
})
export class BangdanPage {
  BookstorePage;
  // @ViewChild('ac') ac;
  icons:string="camera";
  items = [];
  isActive = 0;
  isClick(i){
    this.isActive=i;
  }
  arr=['男生','女生','出版'];
  constructor(public navCtrl: NavController) {
    this.BookstorePage = BookstorePage;
  }
  fanhui(){
    this.navCtrl.push(BookstorePage);
  }

}
