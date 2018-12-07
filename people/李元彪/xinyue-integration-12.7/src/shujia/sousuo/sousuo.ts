import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SousuoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sousuo',
  templateUrl: 'sousuo.html',
})
export class SousuoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  return(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SousuoPage');
  }

}
