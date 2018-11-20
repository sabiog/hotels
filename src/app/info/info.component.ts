import { Component, OnInit } from '@angular/core';
import { data, IInfo } from '../data';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'hw-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public items$: Observable<IInfo[]>;
  public selectedType = 'all';

  ngOnInit() {
    this.items$ = data;
  }

  selectType(type: string) {
    this.selectedType = type;
  }
}
