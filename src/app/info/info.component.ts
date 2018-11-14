import { Component, OnInit } from '@angular/core';
import { data, IInfo } from '../data';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'hw-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public items$ = data;
  public allitems$ = data;

  constructor() { }

  ngOnInit() {
  }

  filterData(type: string) {
    this.items$ = this.allitems$.filter((item: IInfo) => item.type === 'hotel');
  }

}
