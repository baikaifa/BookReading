import { PinglunPage } from './../read/pinglun/pinglun';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Img } from 'ionic-angular';

/**
 * Generated class for the ReadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-read',
  templateUrl: 'read.html',
})
export class ReadPage {
  PinglunPage;
  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.PinglunPage = PinglunPage;
  }

  gopinglun(){
    this.navCtrl.push(PinglunPage);
  }
}
