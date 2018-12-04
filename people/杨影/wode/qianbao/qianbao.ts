import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QianbaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qianbao',
  templateUrl: 'qianbao.html',
})
export class QianbaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  me(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad QianbaoPage');
  }

}
