import { Component, Input } from '@angular/core';
import { IInfo } from '../../data';

@Component({
  selector: 'hw-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent {

  @Input()
  public item: IInfo;

}
