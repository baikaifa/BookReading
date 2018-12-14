import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  isActive=0;
  isClick(i){
    this.isActive=i;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
