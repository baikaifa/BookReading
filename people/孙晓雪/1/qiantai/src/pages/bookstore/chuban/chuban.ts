import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Jsonp } from '@angular/http';

/**
 * Generated class for the ChubanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chuban',
  templateUrl: 'chuban.html',
})
export class ChubanPage {
  public arr1=[];
  public arr2=[];

  constructor(public http:Http,public jsonp:Jsonp,public navCtrl: NavController, public navParams: NavParams) {
    //书城-出版-轮播
    this.http.get('/api/chuban/carousel').subscribe((data)=>{
      this.arr1=JSON.parse(data['_body']);
    })
    //出版-图书
    this.http.get('/api/chuban').subscribe((data)=>{
      this.arr2=JSON.parse(data['_body']);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChubanPage');
  }

}
