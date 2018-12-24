import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../../providers/storage/storage';
import { HttpServicesProvider } from '../../../providers/http-services/http-services';

/**
 * Generated class for the RegisterpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registerpassword',
  templateUrl: 'registerpassword.html',
})
export class RegisterpasswordPage {
  public tel = '';

  public code = '';

  public password = '';

  public rpassword = '';
  constructor(public httpService: HttpServicesProvider,public storage: StorageProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.tel = this.storage.get('reg_tel');
    console.log(this.tel);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterpasswordPage');
  }
  //执行注册
  doRegister(){
    if(this.password!=this.rpassword){
alert('确认密码和密码不一样');
    }else if(this.password.length<6){
      alert('密码长度不能小于6位');
    }
    else{

      //提交数据
      var api='api/register';
      this.httpService.doPost(api, { "tel": this.tel,"password":this.password}, (result) => {
        console.log(result);
          if(result.success){
            console.log(result.userinfo);
            //保存用户信息  
            this.storage.set('userinfo',result.userinfo);
            //返回到用户中心 注册成功
            this.navCtrl.popToRoot();//回到根页面
          }else{
            alert('注册失败');
          }
      })
    }
  }

}
