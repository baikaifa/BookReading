import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { QiandaoPage } from '../../shujia/qiandao/qiandao';
import { SousuoPage } from '../../shujia/sousuo/sousuo';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private http:HttpClient,public navCtrl: NavController) {
    this.http.get('/api').subscribe((data)=>{
      console.log(data);
    })
  
  }
  qiandao(){
    this.navCtrl.push(QiandaoPage);
  }
  sousuo(){
    this.navCtrl.push(SousuoPage);
  }

}
