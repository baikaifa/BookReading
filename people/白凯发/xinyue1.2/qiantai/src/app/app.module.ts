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
import { BookstorePage } from '../pages/bookstore/bookstore';
import { ReadPage } from '../pages/bookstore/read/read';
import { OriginatePage } from '../pages/originate/originate';
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
import { LiangshengPage } from '../pages/originate/liangsheng/liangsheng';
import { WritenovelPage } from '../pages/originate/writenovel/writenovel';
import { HitalkPage } from '../pages/originate/hitalk/hitalk';
import{RegisterpasswordPage} from'../pages/me/registerpassword/registerpassword'
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
    ReadPage,
    LiangshengPage,
    WritenovelPage,
    HitalkPage,
    RegisterpasswordPage
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
    ReadPage,
    LiangshengPage,
    WritenovelPage,
    HitalkPage,
    RegisterpasswordPage
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
