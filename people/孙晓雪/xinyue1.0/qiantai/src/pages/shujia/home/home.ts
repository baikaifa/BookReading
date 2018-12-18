import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { QiandaoPage } from '../qiandao/qiandao';
import { SousuoPage } from '../sousuo/sousuo';
import  {Http,Jsonp} from '@angular/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public flag=false;//是否显示更新连载书
public arr=[];
  constructor(public http:Http,public jsonp:Jsonp,private httpClient:HttpClient,public navCtrl: NavController) {
    // this.http.get('/api').subscribe((data)=>{
    //   console.log(data);
    // })
    this.http.get('/api/shujia').subscribe((data)=>{
      console.log(data);
      console.log(JSON.parse(data['_body']));
      this.arr=JSON.parse(data['_body']);
    })
  
  }
  qiandao(){
    this.navCtrl.push(QiandaoPage);
  }
  sousuo(){
    this.navCtrl.push(SousuoPage);
  }
  isShow(){
    if(this.flag==true){
      this.flag=false;
    }else{
      this.flag=true;
    }
  }

}
