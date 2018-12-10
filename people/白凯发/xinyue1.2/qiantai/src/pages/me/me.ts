import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from './login/login';
import { IdeaPage } from './idea/idea';
import { LikePage } from './like/like';
import { YueliPage } from './yueli/yueli';
import { QianbaoPage} from './qianbao/qianbao'
import { XiaoxiPage} from './xiaoxi/xiaoxi'

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
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MePage');
  }
  //跳转意见反馈页
  goIdea() {
    this.navCtrl.push(IdeaPage);
  }
  //跳转我的收藏页
  goLike() {
    this.navCtrl.push(LikePage);
  }
  //跳转我的阅历页
  goxiaoxi() {
    this.navCtrl.push(XiaoxiPage);
  }

  goqianbao() {
    this.navCtrl.push(QianbaoPage);
  }
  goYueli(){
    this.navCtrl.push(YueliPage);
  }

}
