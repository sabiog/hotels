import { Component, ViewEncapsulation } from '@angular/core';
import { IInfo } from 'src/app/data';

@Component({
  selector: 'hw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'hotel';
  public selectedItem: IInfo = {
    'img': '',
    'img2': '',
    'address': '',
    'phone': 0,
    'weather': {
      'title': '',
      'icon': '',
      'water': undefined,
      'temperature': undefined
    },
    'social_info': {
      'title': '',
      'img': '',
      'followers': 0,
      'following': 0
    },
    'type': ''
  };

  showAdditionalInfo(item: IInfo) {
    this.selectedItem = item;
  }
}
