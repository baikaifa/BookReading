import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OriginatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-originate',
  templateUrl: 'originate.html',
})
export class OriginatePage {
  icons:string="camera";
  items = [];
  isActive = 0;
  isClick(i){
    this.isActive=i;
  }
  arr=['推荐','创作'];
  constructor(public navCtrl: NavController) {
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OriginatePage');
  }

}
