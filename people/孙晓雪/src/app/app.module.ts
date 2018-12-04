
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//自定义组件
import { AboutPage } from '../pages/about/about';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { MePage } from '../pages/me/me';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConfigProvider } from '../providers/config/config';
import { HttpServicesProvider } from '../providers/http-services/http-services';
import { StorageProvider } from '../providers/storage/storage';
import { RegistersignPage } from '../pages/registersign/registersign';
import { IdeaPage } from '../pages/idea/idea';
import { WritePage } from '../pages/write/write';
import { LikePage } from '../pages/like/like';
import { YueliPage } from '../pages/yueli/yueli';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    MePage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    RegistersignPage,
    IdeaPage,
    WritePage,
    LikePage,
    YueliPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    MePage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    RegistersignPage,
    IdeaPage,
    WritePage,
    LikePage,
    YueliPage
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
