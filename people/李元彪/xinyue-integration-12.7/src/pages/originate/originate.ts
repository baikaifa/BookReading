import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{YuanchaungtuijianPage} from '../../pages/yuanchaungtuijian/yuanchaungtuijian'
import{LiangshengPage} from '../../pages/liangsheng/liangsheng';
/**
 * Generated class for the OriginatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-originate',
  templateUrl: 'originate.html',
})
export class OriginatePage {
  public LiangshengPage=LiangshengPage;
  public flag=false;//是否显示更新连载书
  icons:string="camera";
  items = [];
  isActive = 0;
  isClick(i){
    this.isActive=i;
  }
  arr=['推荐','创作'];
  constructor(public navCtrl: NavController) {
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OriginatePage');
  }

  isShow(){
    if(this.flag==true){
      this.flag=false;
    }else{
      this.flag=true;
    }
  }
  goYuanchuangtuijian(){
    this.navCtrl.push(YuanchaungtuijianPage);
  }
}
