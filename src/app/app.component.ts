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
  public selectedItem: IInfo;

  showAdditionalInfo(item: IInfo) {
    this.selectedItem = item;
  }
}
