import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Jsonp } from '@angular/http';
import { StorageProvider } from '../../../providers/storage/storage';
import { RegistersignPage } from '../registersign/registersign';
import { HttpServicesProvider } from '../../../providers/http-services/http-services';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public tel = '';//电话号码
  constructor(public httpService: HttpServicesProvider, public storage: StorageProvider, public http: Http, public jsonp: Jsonp, public navCtrl: NavController, public navParams: NavParams) {
    console.log();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


  //跳转到发送验证码
  goRegistersignPage() {
    var api = 'api/sendCode';
    //电话号码是否合法的验证
    if (/^\d{11}$/.test(this.tel)) {
    // if (this.tel) {
      //注意 服务器要允许跨域
      this.httpService.doPost(api, { "tel": this.tel },  (result) =>{
        console.log(result);//发送到手机的验证码返回方便我们验证
        if (result.success) {
          //这里不能用that代替this，否则会找不到storage方法
          this.storage.set('reg_tel',this.tel);//保存电话号码
          this.navCtrl.push(RegistersignPage)//跳转到下个页面验证验证码
        }else{
          alert('发送验证码失败'+result.message);
        }
      })
    }else{
      alert('电话号码错误');
    }


  }
}
