import { Component } from '@angular/core';

import { OriginatePage } from '../originate/originate';
import { MePage } from '../me/me';
import { BookstorePage } from '../bookstore/bookstore';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BookstorePage;
  tab2Root = OriginatePage;
  tab3Root = MePage;

  constructor() {

  }
}
