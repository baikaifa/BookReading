import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import  {Http,Jsonp} from '@angular/http';
import { WanjiePage } from './wanjie/wanjie';
import { ChubanPage } from './chuban/chuban';
import { BangdanPage } from './bangdan/bangdan';
import { ClassifyPage } from './classify/classify';



import { ReadPage } from './read/read';
import { Read2Page } from './read2/read2';
import { Read3Page } from './read3/read3';
import { Read4Page } from './read4/read4';
import { Read5Page } from './read5/read5';
import { Read6Page } from './read6/read6';
import { Read7Page } from './read7/read7';
import { Read8Page } from './read8/read8';
// ViewChild
@Component({
  selector: 'page-bookstore',
  templateUrl: 'bookstore.html'
})
export class BookstorePage {

  ClassifyPage;
  BangdanPage;
  ChubanPage;
  WanjiePage;

  public ReadPage=ReadPage;
  public Read2Page=Read2Page;
  public Read3Page=Read3Page;
  public Read4Page=Read4Page;
  public Read5Page=Read5Page;
  public Read6Page=Read6Page;
  public Read7Page=Read7Page;
  public Read8Page=Read8Page;
  public pagesArr=[Read2Page,Read8Page,Read3Page,Read4Page,Read5Page,Read6Page,Read7Page,ReadPage,];

  public arr1=[];
  public arr2=[];
  public arr3=[];
  public arr4=[];
  public arr5=[];
  public arr6=[];
  public arr7=[];
  public arr8=[];
  // @ViewChild('ac') ac;
  icons:string="camera";
  items = [];
  isActive = 0;
  isClick(i){
    this.isActive=i;
  }
  arr=['精选','女生','男生','漫画'];
  constructor( public http:Http,public jsonp:Jsonp,public navCtrl: NavController) {
    console.log(this.pagesArr[0]);
    console.log(this.pagesArr[1]);
    console.log('2324');
    //书城-精选-图书
    this.http.get('/api').subscribe((data)=>{
      console.log(data);
      console.log(JSON.parse(data['_body']));
      this.arr1=JSON.parse(data['_body']);
    })
    //书城-女生-图书
    this.http.get('/api/girls').subscribe((data)=>{
      console.log(data);
      console.log(JSON.parse(data['_body']));
      this.arr2=JSON.parse(data['_body']);
    })
    //书城-男生-图书
    this.http.get('/api/boys').subscribe((data)=>{
      console.log(data);
      console.log(JSON.parse(data['_body']));
      this.arr3=JSON.parse(data['_body']);
    })
    //书城-漫画-图书
    this.http.get('/api/mans').subscribe((data)=>{
      console.log(data);
      console.log(JSON.parse(data['_body']));
      this.arr4=JSON.parse(data['_body']);
    })
    //书城-精选-轮播
    this.http.get('/api/books/carousel').subscribe((data)=>{
      console.log(data);
      console.log(JSON.parse(data['_body']));
      this.arr5=JSON.parse(data['_body']);
    })
    //书城-女生-轮播
    this.http.get('/api/girls/carousel').subscribe((data)=>{
      this.arr6=JSON.parse(data['_body']);
    })
    //书城-男生-轮播
    this.http.get('/api/boys/carousel').subscribe((data)=>{
      this.arr7=JSON.parse(data['_body']);
    })
    //书城-漫画-轮播
    this.http.get('/api/mans/carousel').subscribe((data)=>{
      this.arr8=JSON.parse(data['_body']);
    })
  }
  //跳转阅读(图书详情)页
  // goread(){
  //   this.navCtrl.push(ReadPage);
  // }
  //跳转分类页
  goclassfy(){
    this.navCtrl.push(ClassifyPage);
  }
  //跳转榜单页
  gobangdan(){
    this.navCtrl.push(BangdanPage);
  }
  //跳转出版页
  gochuban(){
    this.navCtrl.push(ChubanPage);
  }
  //跳转完结页
  gowanjie(){
    this.navCtrl.push( WanjiePage);
  }
}

