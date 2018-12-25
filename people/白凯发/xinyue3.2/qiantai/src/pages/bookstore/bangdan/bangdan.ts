import { BookstorePage } from './../bookstore';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  {Http,Jsonp} from '@angular/http';
/**
 * Generated class for the BangdanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bangdan',
  templateUrl: 'bangdan.html',
})
export class BangdanPage {
  BookstorePage;
  // @ViewChild('ac') ac;
  icons:string="camera";
  // items = [];
  isActive = 0;
  isClick(i){
    this.isActive=i;
  }
  public arr5=[];
  public arr1=[];
  public arr2=[];
  arr=['男生','女生','出版'];
  constructor( public http:Http,public navCtrl: NavController) {
    this.BookstorePage = BookstorePage;
    this.http.get('/api/bangdan/boys').subscribe((data)=>{
      console.log(data);
      console.log(JSON.parse(data['_body']));
      this.arr5=JSON.parse(data['_body']);
    })
    this.http.get('/api/bangdan/girls').subscribe((data)=>{
      console.log(data);
      console.log(JSON.parse(data['_body']));
      this.arr1=JSON.parse(data['_body']);
    })
    this.http.get('/api/bangdan/chuban').subscribe((data)=>{
      console.log(data);
      console.log(JSON.parse(data['_body']));
      this.arr2=JSON.parse(data['_body']);
    })
  }
  fanhui(){
    this.navCtrl.push(BookstorePage);
  }

}
