import { BookstorePage } from './../bookstore';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Jsonp } from '@angular/http';

/**
 * Generated class for the ClassifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-classify',
  templateUrl: 'classify.html',
})
export class ClassifyPage {
  // @ViewChild('ac') ac;
  icons:string="camera";
  items = [];
  isActive = 0;
  isClick(i){
    this.isActive=i;
  }
  public arr1=[];
  public arr2=[];
  public arr3=[];
  public arr4=[];
  //arr=['男生','女生','出版','漫画'];
  constructor(public http:Http,public jsonp:Jsonp,public navCtrl: NavController) {
    //分类-男生
    this.http.get('/api/classify/boys').subscribe((data)=>{
      this.arr1=JSON.parse(data['_body']);
    })
    //分类-女生
    this.http.get('/api/classify/girls').subscribe((data)=>{
      this.arr2=JSON.parse(data['_body']);
    })
    //分类-出版
    this.http.get('/api/classify/chuban').subscribe((data)=>{
      this.arr3=JSON.parse(data['_body']);
    })
    //分类-漫画
    this.http.get('/api/classify/comic').subscribe((data)=>{
      this.arr4=JSON.parse(data['_body']);
    })
  }
  fanhui(){
    this.navCtrl.push(BookstorePage);
  }
}
