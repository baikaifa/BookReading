import { ChubanPage } from './../pages/bookstore/chuban/chuban';
import { BangdanPage } from './../pages/bookstore/bangdan/bangdan';
import { ClassifyPage } from './../pages/bookstore/classify/classify';
import { PinglunPage } from './../pages/read/pinglun/pinglun';
import { SearhPage } from './../pages/searh/searh';
import { BookstorePage } from './../pages/bookstore/bookstore';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ReadPage } from '../pages/read/read';
import { WanjiePage } from '../pages/bookstore/wanjie/wanjie';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    BookstorePage,
    TabsPage,
    ReadPage,
    SearhPage,
    PinglunPage,
    ClassifyPage,
    BangdanPage,
    ChubanPage,
    WanjiePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    BookstorePage,
    TabsPage,
    ReadPage,
    SearhPage,
    PinglunPage,
    ClassifyPage,
    BangdanPage,
    ChubanPage,
    WanjiePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
