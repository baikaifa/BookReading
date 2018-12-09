import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Img } from 'ionic-angular';
import  {Http,Jsonp} from '@angular/http';

/**
 * Generated class for the ReadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-read',
  templateUrl: 'read.html',
})
export class ReadPage {
  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
  public arr1=[];
  //bookid:number;
  constructor( public http:Http,public jsonp:Jsonp,public navCtrl: NavController, public navParams: NavParams) {
    //this.bookid=this.router.snapshot.params['ID'];
    this.http.get('/api').subscribe((data)=>{
      console.log(data);
      console.log(JSON.parse(data['_body']));
      this.arr1=JSON.parse(data['_body']);
    })
  }


}
