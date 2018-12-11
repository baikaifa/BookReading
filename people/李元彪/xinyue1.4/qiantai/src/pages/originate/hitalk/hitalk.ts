import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OriginatePage } from '../originate';

/**
 * Generated class for the HitalkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hitalk',
  templateUrl: 'hitalk.html',
})
export class HitalkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HitalkPage');
  }

  //跳转Hi聊页
  goHi(){
    this.navCtrl.push(OriginatePage);
  }
}
