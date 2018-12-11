import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//自定义组件

import { HttpClientModule } from '@angular/common/http';
import { HttpModule,JsonpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConfigProvider } from '../providers/config/config';
import { HttpServicesProvider } from '../providers/http-services/http-services';
import { StorageProvider } from '../providers/storage/storage';

import { TabsPage } from '../pages/tabs/tabs';

//书城
import { BookstorePage } from '../pages/bookstore/bookstore';
import { ReadPage } from '../pages/bookstore/read/read';
import { Read2Page } from '../pages/bookstore/read2/read2';
import { Read3Page } from '../pages/bookstore/read3/read3';
import { Read4Page } from '../pages/bookstore/read4/read4';
import { Read5Page } from '../pages/bookstore/read5/read5';
import { Read6Page } from '../pages/bookstore/read6/read6';
import { Read7Page } from '../pages/bookstore/read7/read7';
import { Read8Page } from '../pages/bookstore/read8/read8';
import { BangdanPage } from '../pages/bookstore/bangdan/bangdan';
import { ChubanPage } from '../pages/bookstore/chuban/chuban';
import { ClassifyPage } from '../pages/bookstore/classify/classify';
import { WanjiePage } from '../pages/bookstore/wanjie/wanjie';



//原创
import { OriginatePage } from '../pages/originate/originate';
import { LiangshengPage } from '../pages/originate/liangsheng/liangsheng';
import { WritenovelPage } from '../pages/originate/writenovel/writenovel';

import { LoginPage } from '../pages/me/login/login';
import { QianbaoPage } from '../pages/me/qianbao/qianbao';
import { XiaoxiPage } from '../pages/me/xiaoxi/xiaoxi';
import { RegisterPage } from '../pages/me/register/register';
import { MePage } from '../pages/me/me';
import { RegistersignPage } from '../pages/me/registersign/registersign';
import { IdeaPage } from '../pages/me/idea/idea';
import { WritePage } from '../pages/me/write/write';
import { LikePage } from '../pages/me/like/like';
import { YueliPage } from '../pages/me/yueli/yueli';
import { QiandaoPage } from '../pages/shujia/qiandao/qiandao';
import { SousuoPage } from '../pages/shujia/sousuo/sousuo';
import { HomePage } from '../pages/shujia/home/home';
import { HitalkPage } from '../pages/originate/hitalk/hitalk';
import { RegisterpasswordPage } from'../pages/me/registerpassword/registerpassword'
import { PersonalPage } from '../pages/me/personal/personal';
@NgModule({
  declarations: [
    MyApp,
    OriginatePage,
    MePage,
    BookstorePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    RegistersignPage,
    IdeaPage,
    WritePage,
    LikePage,
    YueliPage,
    QianbaoPage,
    XiaoxiPage,
    QiandaoPage,
    SousuoPage,
    HomePage,
    LiangshengPage,
    WritenovelPage,
    HitalkPage,
    RegisterpasswordPage,
    PersonalPage,
    ReadPage,
    Read2Page,
    Read3Page,
    Read4Page,
    Read5Page,
    Read6Page,
    Read7Page,
    Read8Page,
    BangdanPage,
    ChubanPage,
    ClassifyPage,
    WanjiePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
JsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OriginatePage,
    MePage,
    BookstorePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    RegistersignPage,
    IdeaPage,
    WritePage,
    LikePage,
    YueliPage,
    QianbaoPage,
    XiaoxiPage,
    QiandaoPage,
    SousuoPage,
    HomePage,
    LiangshengPage,
    WritenovelPage,
    HitalkPage,
    RegisterpasswordPage,
    PersonalPage,
    ReadPage,
    Read2Page,
    Read3Page,
    Read4Page,
    Read5Page,
    Read6Page,
    Read7Page,
    Read8Page,
    BangdanPage,
    ChubanPage,
    ClassifyPage,
    WanjiePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigProvider,
    HttpServicesProvider,
    StorageProvider
  ]
})
export class AppModule {}
