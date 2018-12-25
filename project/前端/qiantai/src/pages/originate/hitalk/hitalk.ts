import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Jsonp } from '@angular/http';
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
  public comment={
    img:'http://127.0.0.1:3001/hichat/tx6.png',
    name:'花落雨',
    text:'',
    agree:'0',
    color:'',
    zanguo:'false'
  };
  public dianzanid = '';
  public arr1 = [];
  constructor(public storage: StorageProvider, public httpService: HttpServicesProvider, public config: ConfigProvider, public http: Http, public jsonp: Jsonp, public navCtrl: NavController, public navParams: NavParams) {
    //原创-推荐-高能Hi聊-评论
    this.http.get('/api/hichat/comment1').subscribe((data) => {
      this.arr1 = JSON.parse(data['_body']);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HitalkPage');
  }

  dianzan(idx) {
    this.http.get('/api/hichat/comment1').subscribe((data) => {
      this.arr1 = JSON.parse(data['_body']);
    })//获取最新数据
    console.log(idx);
    console.log(this.arr1);

    if (this.arr1[idx - 1].zanguo=='true') {//赞过 字符串无论如何都是正确
      alert('已经点过赞了');
    } else {//没赞过
      this.dianzanid = idx;
      this.httpService.doPost('/api/dianzan', { 'id': this.dianzanid }, (data) => {
        this.http.get('/api/hichat/comment1').subscribe((data) => {
          this.arr1 = JSON.parse(data['_body']);
          console.log(this.arr1);
        })//重新获取数据更新视图
      })
    }
  }
  tijiaopinglun(){
    this.httpService.doPost('/api/new_comment',{'comment':this.comment},(data)=>{
      this.http.get('/api/hichat/comment1').subscribe((data) => {
        this.arr1 = JSON.parse(data['_body']);
      })
    })
  }
  ionViewDidEnter() {
    console.log('3触发ionViewDidEnter当进入页面时触发');
  }

  ionViewWillLeave() {
    console.log('4触发ionViewWillLeave当将要离开页面时触发');
  }

  ionViewDidLeave() {
    console.log('5触发ionViewDidLeave离开页面时触发');
  }

  ionViewWillUnload() {
    console.log('6触发ionViewWillUnload页面将要销毁同时页面上元素移除时触发');
  }
  ionViewCanEnter() {
    console.log("ionViewCanEnter");
  }
  ionViewCanleave() {
    console.log("ionViewCanLeave");
  }
}
