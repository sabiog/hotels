import { Component, OnInit, Input } from '@angular/core';
import { IInfo } from '../data';

@Component({
  selector: 'hw-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {

  @Input()
  public item: IInfo;

  constructor() { }

  ngOnInit() {
  }

}
