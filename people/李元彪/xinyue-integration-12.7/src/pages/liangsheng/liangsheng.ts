import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{WritenovelPage} from '../../pages/writenovel/writenovel';
import { ActionSheetController } from 'ionic-angular';
/**
 * Generated class for the LiangshengPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liangsheng',
  templateUrl: 'liangsheng.html',
})
export class LiangshengPage {
public WritenovelPage=WritenovelPage;
  constructor(public actionSheetCtrl: ActionSheetController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LiangshengPage');
  }
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: '修改',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: '发布',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: '删除',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
 
    actionSheet.present();
  }
}
