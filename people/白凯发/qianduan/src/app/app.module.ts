import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//自定义组件
import { OriginatePage } from '../pages/originate/originate';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule,JsonpModule } from '@angular/http';
//王学宾
import { BookstorePage } from '../pages/bookstore/bookstore';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/me/login/login';
import { QianbaoPage } from '../pages/me/qianbao/qianbao';
import { XiaoxiPage } from '../pages/me/xiaoxi/xiaoxi';
import { RegisterPage } from '../pages/me/register/register';
import { MePage } from '../pages/me/me';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConfigProvider } from '../providers/config/config';
import { HttpServicesProvider } from '../providers/http-services/http-services';
import { StorageProvider } from '../providers/storage/storage';
import { RegistersignPage } from '../pages/me/registersign/registersign';
import { IdeaPage } from '../pages/me/idea/idea';
import { WritePage } from '../pages/me/write/write';
import { LikePage } from '../pages/me/like/like';
import { YueliPage } from '../pages/me/yueli/yueli';
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
    XiaoxiPage
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
    XiaoxiPage
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
