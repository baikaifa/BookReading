import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { QianbaoPage} from '../../wode/qianbao/qianbao'
import { XiaoxiPage} from '../../wode/xiaoxi/xiaoxi'
/**
 * Generated class for the MePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {
public LoginPage=LoginPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
qianbao(){
  this.navCtrl.push(QianbaoPage);
}
xiaoxi(){
  this.navCtrl.push(XiaoxiPage);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad MePage');
  }
}
