import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController,  NavParams, Content,AlertController } from 'ionic-angular';
import { HttpServicesProvider } from '../../../providers/http-services/http-services';
import { ConfigProvider } from '../../../providers/config/config';
import { StorageProvider } from '../../../providers/storage/storage';

/**
 * Generated class for the SousuoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sousuo',
  templateUrl: 'sousuo.html',
})
export class SousuoPage {
  public keywords = '';
  public historyList = [];//历史记录的数据
  constructor(public alertCtrl: AlertController,
    public storage: StorageProvider, public httpService: HttpServicesProvider, public config: ConfigProvider, public navCtrl: NavController, public navParams: NavParams) {
      //获取历史记录
  }
  return(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SousuoPage');
  }

}
