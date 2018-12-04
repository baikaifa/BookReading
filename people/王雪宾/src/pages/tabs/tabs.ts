import { BookstorePage } from './../bookstore/bookstore';
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = BookstorePage;
  constructor() {

  }
}
