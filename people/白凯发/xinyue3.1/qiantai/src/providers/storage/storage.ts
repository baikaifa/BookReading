import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor(public http: HttpClient) {
    console.log('Hello StorageProvider Provider');
  }

  //localStorage
  set(key,value){
    localStorage.setItem(key,JSON.stringify(value));//对象转换成字符串
  }

  get(key){
    return JSON.parse(localStorage.getItem(key));//字符串转化按成对象
  }

  remove(key){
    localStorage.removeItem(key);
  }
  clearAll(){
    localStorage.clear();
  }
}
