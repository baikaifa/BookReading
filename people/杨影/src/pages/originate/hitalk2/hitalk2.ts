import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Jsonp } from '@angular/http';

/**
 * Generated class for the Hitalk2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hitalk2',
  templateUrl: 'hitalk2.html',
})
export class Hitalk2Page {

  public arr1=[];
  constructor(public http:Http,public jsonp:Jsonp,public navCtrl: NavController, public navParams: NavParams) {
    //原创-推荐-高能Hi聊-评论
    this.http.get('/api/hichat/comment2').subscribe((data)=>{
      this.arr1=JSON.parse(data['_body']);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Hitalk2Page');
  }

}
