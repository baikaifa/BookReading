import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Jsonp } from '@angular/http';


/**
 * Generated class for the WanjiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wanjie',
  templateUrl: 'wanjie.html',
})
export class WanjiePage {
  public arr1=[];
  public arr2=[];
  constructor(public http:Http,public jsonp:Jsonp,public navCtrl: NavController, public navParams: NavParams) {
    //书城-完结-轮播
    this.http.get('/api/wanjie/carousel').subscribe((data)=>{
      this.arr1=JSON.parse(data['_body']);
    })
    //完结-图书
    this.http.get('/api/wanjie').subscribe((data)=>{
      this.arr2=JSON.parse(data['_body']);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WanjiePage');
  }

}
