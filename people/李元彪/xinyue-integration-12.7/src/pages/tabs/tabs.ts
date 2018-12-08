import { Component } from '@angular/core';

import { OriginatePage } from '../originate/originate';
import { MePage } from '../me/me';
import { BookstorePage } from '../bookstore/bookstore';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab0Root = HomePage;
  tab1Root = BookstorePage;
  tab2Root = OriginatePage;
  tab3Root = MePage;

  constructor() {

  }
}
