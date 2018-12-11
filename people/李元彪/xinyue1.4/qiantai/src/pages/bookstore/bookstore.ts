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
    this.http.get('/api').subscribe((data)=>{
      console.log(data);
      console.log(JSON.parse(data['_body']));
      this.arr1=JSON.parse(data['_body']);
    })

    this.http.get('/api/girls').subscribe((data)=>{
      console.log(data);
      console.log(JSON.parse(data['_body']));
      this.arr2=JSON.parse(data['_body']);
    })

    this.http.get('/api/boys').subscribe((data)=>{
      console.log(data);
      console.log(JSON.parse(data['_body']));
      this.arr3=JSON.parse(data['_body']);
    })

    this.http.get('/api/mans').subscribe((data)=>{
      console.log(data);
      console.log(JSON.parse(data['_body']));
      this.arr4=JSON.parse(data['_body']);
    })
  }
 
  goread(){
    this.navCtrl.push(ReadPage);
  }
  goclassfy(){
    this.navCtrl.push(ClassifyPage);
  }
  gobangdan(){
    this.navCtrl.push(BangdanPage);
  }
  gochuban(){
    this.navCtrl.push(ChubanPage);
  }
  gowanjie(){
    this.navCtrl.push( WanjiePage);
  }
}

