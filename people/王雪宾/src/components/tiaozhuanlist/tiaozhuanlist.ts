import { Component } from '@angular/core';

/**
 * Generated class for the TiaozhuanlistComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tiaozhuanlist',
  templateUrl: 'tiaozhuanlist.html'
})
export class TiaozhuanlistComponent {

  text: string;

  public list=[];

  constructor() {
    console.log('Hello TiaozhuanlistComponent Component');
    this.text = 'Hello World';

    this.list=['lll','ddd','dfsf'];
  }

}
