import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WritePage } from '../write/write';

/**
 * Generated class for the IdeaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-idea',
  templateUrl: 'idea.html',
})
export class IdeaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdeaPage');
  }
  goWrite(){
    this.navCtrl.push(WritePage);
  }
}
