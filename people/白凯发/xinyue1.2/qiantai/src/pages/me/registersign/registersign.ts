import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterpasswordPage } from '../registerpassword/registerpassword';
import { StorageProvider } from '../../../providers/storage/storage';
import { HttpServicesProvider } from '../../../providers/http-services/http-services';
/**
 * Generated class for the RegistersignPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registersign',
  templateUrl: 'registersign.html',
})
export class RegistersignPage {
  public code = '';//验证码
  public isShowSend = false;//是否显示发送验证码的按钮
  public num = 3;//倒计时数量
  public tel = '';
  constructor(public storage: StorageProvider, public httpService: HttpServicesProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.tel = this.storage.get('reg_tel');
    console.log(this.tel);
  }

  ionViewDidLoad() {
    this.doTimer();
  }
  goRegisterpasswordPage() {
    // 验证验证码是否成功  
    var api = 'api/validateCode';
    this.httpService.doPost(api, { "tel": this.tel, "code": this.code }, (result) => {
      console.log(result);//发送到手机的验证码返回方便我们验证
      if (result.success) {
        //保存验证码
        this.storage.set('reg_code', this.code);
        //跳转到下一个页面
        this.navCtrl.push(RegisterpasswordPage);
      } else {
        alert('验证码错误');
      }
    })
  }
//倒计时的方法
doTimer() {
  var timer = setInterval(() => {
    --this.num;
    if (this.num == 0) {
      clearInterval(timer);
      this.isShowSend = true;
    }
  }, 1000)
}
//发送验证码
sendCode(){
  //获取电话号码
  // var tel = this.storage.get('reg_tel');
  // console.log('重新发送验证码');

  var api = 'api/sendCode';
  this.httpService.doPost(api, { "tel": this.tel }, (result) => {
    console.log(result);//发送到手机的验证码返回方便我们验证
    if (result.success) {
      this.num = 3;//设计倒计时
      this.doTimer();//倒计时
      this.isShowSend = false;//显示倒计时按钮
    } else {
      alert('发送验证码失败');
    }
  })
}
}
