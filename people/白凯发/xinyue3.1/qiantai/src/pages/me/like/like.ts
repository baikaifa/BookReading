import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LikePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-like',
  templateUrl: 'like.html',
})
export class LikePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LikePage');
  }

}
