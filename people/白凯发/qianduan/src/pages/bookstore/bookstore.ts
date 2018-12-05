import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import  {Http,Jsonp} from '@angular/http';
// ViewChild
@Component({
  selector: 'page-bookstore',
  templateUrl: 'bookstore.html'
})
export class BookstorePage {
  public arr1=[];
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
       console.log(this.arr1[0].title);
       console.log(this.arr1[0].pic_src);
    })
    }
}

