import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { QiandaoPage } from '../qiandao/qiandao';
import { SousuoPage } from '../sousuo/sousuo';
import  {Http,Jsonp} from '@angular/http';

import { ReadPage } from '../../bookstore/read/read';
import { Read2Page } from '../../bookstore/read2/read2';
import { Read3Page } from '../../bookstore/read3/read3';
import { Read4Page } from '../../bookstore/read4/read4';
import { Read5Page } from '../../bookstore/read5/read5';
import { Read6Page } from '../../bookstore/read6/read6';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public ReadPage=ReadPage;
  public Read2Page=Read2Page;
  public Read3Page=Read3Page;
  public Read4Page=Read4Page;
  public Read5Page=Read5Page;
  public Read6Page=Read6Page;
  public pagesArr=[Read2Page,Read3Page,Read4Page,Read5Page,Read6Page,ReadPage,];

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
