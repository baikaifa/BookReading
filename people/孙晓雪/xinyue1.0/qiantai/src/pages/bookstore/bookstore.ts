import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import  {Http,Jsonp} from '@angular/http';
import { ReadPage } from './read/read';
// ViewChild
@Component({
  selector: 'page-bookstore',
  templateUrl: 'bookstore.html'
})
export class BookstorePage {
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
  //跳转阅读页
  goRead(){
    this.navCtrl.push(ReadPage);
  }
}

