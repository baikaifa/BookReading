import { Component } from '@angular/core';

import { OriginatePage } from '../originate/originate';
import { MePage } from '../me/me';
import { BookstorePage } from '../bookstore/bookstore';
import { HomePage } from '../shujia/home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BookstorePage;
  tab3Root = OriginatePage;
  tab4Root = MePage;

  constructor() {

  }
}
