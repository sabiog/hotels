import { Component, ViewEncapsulation } from '@angular/core';
import {InfoService} from './info.service';
import {IInfo} from './data';

@Component({
  selector: 'hw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(private data: InfoService) {}

  public getSelectedItem(): IInfo {
    return this.data.getSelectedItem();
  }

}
