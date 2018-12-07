import { SousuoPage } from './../pages/sousuo/sousuo';
import { ClassifyPage } from './../pages/classify/classify';
import { SearchPage } from './../pages/search/search';
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

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    BookstorePage,
    TabsPage,
    ClassifyPage,
    ReadPage,
    SousuoPage,
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
    ClassifyPage,
    ReadPage,
    SousuoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
