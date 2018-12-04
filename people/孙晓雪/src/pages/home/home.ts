import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private http:HttpClient) {
    console.log("213");
    this.http.get('/api').subscribe((data)=>{
      console.log(data);
    })
  }

}
