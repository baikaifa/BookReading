import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the XiaoxiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-xiaoxi',
  templateUrl: 'xiaoxi.html',
})
export class XiaoxiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  me(){
    this.navCtrl.pop();
  }
  isActive=0;
  arr=['通知','评论'];
  isClick(i){
    this.isActive=i;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad XiaoxiPage');
  }

}
