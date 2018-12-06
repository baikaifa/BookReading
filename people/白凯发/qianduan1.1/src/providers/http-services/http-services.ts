// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Jsonp,Headers } from '@angular/http';
import { ConfigProvider } from '../../providers/config/config';
/*
  Generated class for the HttpServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServicesProvider {

  //设置post的格式
  private headers = new Headers({'Content-Type':'application/json'});
  constructor(public config: ConfigProvider, public http: Http, public jsonp: Jsonp) {
    console.log('Hello HttpServicesProvider Provider');
  }
  //请求数据
  //apiUrl:api/focus
  //apuUrl:api/plist?page=1
  requestData(apiUrl, callback) {
    if (apiUrl.indexOf("?") == -1) {
      var api = this.config.apiUrl + apiUrl //+ '?callback=JSONP_CALLBACK'
      // console.log(api);
    } else {
      var api = this.config.apiUrl + apiUrl //+ '&callback=JSONP_CALLBACK'
      console.log(api);
    }
    this.http.get(api).subscribe((data)=>{
       console.log(data);
      // console.log(data['_body']);
      // callback(data);
      //  callback(data['_body']);//异步要用回调函数来处理数据
    }, function(err) {
      console.log(err);
    })
  }
  // this.http.get('/api').subscribe((data) => {
  //   this.arr1 = JSON.parse(data['_body']);
  //  console.log('我get了');
  //post
  doPost(apiUrl,json,callback){
    var api=this.config.apiUrl+apiUrl;
    this.http.post(api,JSON.stringify(json),{headers:this.headers}).subscribe(function(res){
      //  callback(res.json()) 
    })

  }

}
