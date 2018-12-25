import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HttpServicesProvider } from '../../../providers/http-services/http-services';
import { StorageProvider } from '../../../providers/storage/storage';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
public RegisterPage=RegisterPage;
  public userinfo = {
    username: '',
    password: ''
  }
  constructor(public storage: StorageProvider, public httpService: HttpServicesProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  doLogin() {
    //1.this.userinfo表单信息
console.log(this.userinfo);
    //2.请求接口 完成登录功能
    if (this.userinfo.username.length < 6) {
      alert('用户名不合法');
    } else {
      var api = 'api/doLogin';
      this.httpService.doPost(api, this.userinfo, (data) => {
        console.log(data);
        if (data.success) {
          //登陆成功
          this.storage.set('userinfo', data.userinfo);
          this.navCtrl.popToRoot();//回到根页面
        } else {
          alert(data.message);
        }
      })
    }
  }
}
