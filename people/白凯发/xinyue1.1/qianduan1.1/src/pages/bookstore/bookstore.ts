import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpServicesProvider } from '../../providers/http-services/http-services';
// ViewChild
@Component({
  selector: 'page-bookstore',
  templateUrl: 'bookstore.html'
})
export class BookstorePage {
  public arr1 = [];
  // @ViewChild('ac') ac;
  icons: string = "camera";
  items = [];
  isActive = 0;
  isClick(i) {
    this.isActive = i;
  }

  arr = ['精选', '女生', '男生', '漫画'];
  constructor(public http: Http,public httpService: HttpServicesProvider, public navCtrl: NavController) {
 
    this.entry();
   
    // this.httpService.requestData('api',(data)=>{
    //   this.arr1 = JSON.parse(data['_body']);
    //   console.log(data);
    // })
  }
  //Login用到post
  entry(){
    this.http.get('/api').subscribe((data) => {
      this.arr1 = JSON.parse(data['_body']);
      console.log(this.arr1);
    });
      //   this.httpService.requestData('api',(data)=>{
      //     console.log(data);
      // this.arr1 = JSON.parse(data['_body']);
    //  })
  }
  Login() {
      var api = '/api';
      // alert(this.password);
      //下面这一行是封装的post请求，我们使用封装的post请求，有好处，不用频繁更换根url
      this.httpService.doPost(api, {username: '123'}, {})
      //下面的代码是没有封装的post请求,post是给后台发送信息，这里发送的是{username: '123'}，data里面是后台给前台的数据
    // this.http.post('/api', {username: '123'}, {}).subscribe((data)=>{
    //   console.log(data);
    //   alert('我post了数据');
    // })
  }
}

