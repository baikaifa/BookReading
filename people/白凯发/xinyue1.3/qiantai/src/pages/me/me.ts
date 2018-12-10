import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from './login/login';
import { IdeaPage } from './idea/idea';
import { LikePage } from './like/like';
import { YueliPage } from './yueli/yueli';
import { QianbaoPage} from './qianbao/qianbao'
import { XiaoxiPage} from './xiaoxi/xiaoxi'
import { PersonalPage } from '../../pages/me/personal/personal';
import { RegisterPage } from '../../pages/me/register/register';
import { StorageProvider } from '../../providers/storage/storage';
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
public RegisterPage=RegisterPage;
public PersonalPage=PersonalPage;
  public userinfo='';
  constructor(public storage: StorageProvider,public navCtrl: NavController, public navParams: NavParams) {
  }
  
 //沟崽子们
 ionViewDidLoad(){
  // console.log('1触发ionViewDidLoad,仅在页面创建的时候触发一次,如果缓存，下次打开页面不会触发');
}
ionViewWillEnter(){
  // console.log('2触发ionViewWillEnter当要进入页面时触发 每次触发');
  //判断用户有没有登录
  var userinfo=this.storage.get('userinfo');
  if(userinfo&&userinfo.username){//已经登录
      this.userinfo=userinfo;
  }else{
    this.userinfo='';
  }
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
// ionViewDidEnter(){
//   console.log('3触发ionViewDidEnter当进入页面时触发');
// }

// ionViewWillLeave(){
//   console.log('4触发ionViewWillLeave当将要离开页面时触发');
// }

// ionViewDidLeave(){
//   console.log('5触发ionViewDidLeave离开页面时触发');
// }

// ionViewWillUnload(){
//   console.log('6触发ionViewWillUnload页面将要销毁同时页面上元素移除时触发');
// }
// ionViewCanEnter(){
//   console.log("ionViewCanEnter");
// }
// ionViewCanleave(){
//   console.log("ionViewCanLeave");
// }
}
