import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReadPage } from '../bookstore/read/read';
import { LiangshengPage } from './liangsheng/liangsheng';
import { HitalkPage } from './hitalk/hitalk';
import { Http,Jsonp } from '@angular/http';
import { Hitalk2Page } from './hitalk2/hitalk2';
import { Hitalk3Page } from './hitalk3/hitalk3';

/**
 * Generated class for the OriginatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-originate',
  templateUrl: 'originate.html',
})

export class OriginatePage {
  public arr1=[];
  public arr2=[];
  public arr3=[];
  public HitalkPage = HitalkPage;
  public Hitalk2Page = Hitalk2Page;
  public Hitalk3Page = Hitalk3Page;
  public pagesArr = [ HitalkPage,Hitalk2Page,Hitalk3Page ];
  icons:string="camera";
  items = [];
  isActive = 0;
  isClick(i){
    this.isActive=i;
  }
  arr=['推荐','创作'];
  constructor(public http:Http,public jsonp:Jsonp,public navCtrl: NavController) {
    //原创-推荐-原创推荐
    this.http.get('/api/original').subscribe((data)=>{
      this.arr1=JSON.parse(data['_body']);
    })
    //原创-推荐-轮播
    this.http.get('/api/original/carousel').subscribe((data)=>{
      this.arr2=JSON.parse(data['_body']);
    })
    //高能Hi聊
    this.http.get('/api/hichat').subscribe((data)=>{
      this.arr3=JSON.parse(data['_body']);
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OriginatePage');
  }
  //跳转阅读页
  goRead(){
    this.navCtrl.push(ReadPage);
  }
  //跳转原创详情页
  goLS(){
    this.navCtrl.push(LiangshengPage);
  }
  //跳转Hi聊详情页
  // goHi(){
  //   this.navCtrl.push(HitalkPage);
  // }
}
