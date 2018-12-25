import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController,  NavParams, Content,AlertController } from 'ionic-angular';
import { HttpServicesProvider } from '../../../providers/http-services/http-services';
import { ConfigProvider } from '../../../providers/config/config';
import { StorageProvider } from '../../../providers/storage/storage';

/**
 * Generated class for the SousuoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sousuo',
  templateUrl: 'sousuo.html',
})
export class SousuoPage {
  public keywords = '';
  public searched=false; //是否点击了搜索按钮
  public searchList=[];//搜索的数据
  public historyList = [];//历史记录的数据
  constructor(public alertCtrl: AlertController,
    public storage: StorageProvider, public httpService: HttpServicesProvider, public config: ConfigProvider, public navCtrl: NavController, public navParams: NavParams) {
      //获取历史记录
      this.getHistory();
  }
  return(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SousuoPage');
  }

  getSearchList(){
    this.httpService.doPost('api/search_books',{'keywords':this.keywords},(data)=>{
      this.saveHistory();
      this.storage.set('historyData', this.historyList);
        this.searched=true;
        this.searchList=data;
    })
  }
//保存历史记录
saveHistory() {
  //1.获取历史记录
  var history = this.storage.get('historyData');
 //2.判断历史纪录里面有没有搜索的数据
 if (history) {//有历史记录
  if (history.indexOf(this.keywords) == -1) {//以前没有这个关键词
 
    this.historyList.push(this.keywords);
    this.storage.set('historyData', this.historyList);
    console.log(this.historyList);
  }
} else {//有过这个关键词
  this.historyList.push(this.keywords);
  console.log(this.historyList);
}
//没有历史记录
this.storage.set('historyData', this.historyList);
console.log(this.historyList);
}
    //点击历史记录执行的方法
    goSearch(keywords) {
      // console.log(keywords);
      this.keywords = keywords;
      this.getSearchList();
    }
    //获取历史记录
    getHistory() {
      var history = this.storage.get('historyData');
      console.log(history);
      if (history) {//如果历史纪录存在 把历史记录给数据
        this.historyList = history;
        console.log(this.historyList);
      }
    }
     //删除历史记录
  removeHistory(keywords) {
    //提示
    let confirm = this.alertCtrl.create({
      title: '您确定要删除吗?',
      message: '您确定要删除这条历史记录吗，确定点击是，否则点击否',
      buttons: [
        {
          text: '否',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: '是',
          handler: () => {
            var index = this.historyList.indexOf(keywords);
            // console.log(index);
            this.historyList.splice(index, 1);
            //重新写入
            this.storage.set('historyData', this.historyList);
          }
        }
      ]
    });
    confirm.present();
  }
}
