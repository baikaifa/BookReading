import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Jsonp } from '@angular/http';
import { HttpServicesProvider } from '../../../providers/http-services/http-services';
import { ConfigProvider } from '../../../providers/config/config';
import { StorageProvider } from '../../../providers/storage/storage';
/**
 * Generated class for the HitalkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hitalk',
  templateUrl: 'hitalk.html',
})
export class HitalkPage {
  public dianzanyanse='';
  public dianzanid='';
  public arr1=[];
  constructor(public storage: StorageProvider, public httpService: HttpServicesProvider, public config: ConfigProvider,public http:Http,public jsonp:Jsonp,public navCtrl: NavController, public navParams: NavParams) {
    //原创-推荐-高能Hi聊-评论
    this.http.get('/api/hichat/comment1').subscribe((data)=>{
      this.arr1=JSON.parse(data['_body']);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HitalkPage');
  }
  dianzan(idx){
    
    this.dianzanyanse='dianzan';
    this.dianzanid=idx;
    console.log(this.dianzanid);
    this.httpService.doPost('/api/dianzan',{'id':this.dianzanid},(data)=>{
      this.http.get('/api/hichat/comment1').subscribe((data)=>{
        this.arr1=JSON.parse(data['_body']);
      })
    })
  }
  ionViewDidEnter(){
  console.log('3触发ionViewDidEnter当进入页面时触发');
}

ionViewWillLeave(){
  console.log('4触发ionViewWillLeave当将要离开页面时触发');
}

ionViewDidLeave(){
  console.log('5触发ionViewDidLeave离开页面时触发');
}

ionViewWillUnload(){
  console.log('6触发ionViewWillUnload页面将要销毁同时页面上元素移除时触发');
}
ionViewCanEnter(){
  console.log("ionViewCanEnter");
}
ionViewCanleave(){
  console.log("ionViewCanLeave");
}
}
