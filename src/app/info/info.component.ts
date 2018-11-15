import { Component, OnInit } from '@angular/core';
import { data, IInfo } from '../data';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { take } from 'rxjs/internal/operators/take';
import { pluck } from 'rxjs/internal/operators/pluck';
import { map } from 'rxjs/internal/operators/map';
import { groupBy } from 'rxjs/internal/operators/groupBy';
import { distinct } from 'rxjs/internal/operators/distinct';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';

@Component({
  selector: 'hw-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public items$: Observable<IInfo[]>;
  public types: Observable<Set<string>>;

  public selectedType = 'all';

  constructor() {
  }

  ngOnInit() {
    this.items$ = data;
    this.types = this.items$.pipe<IInfo[], Set<string>>(
      take(1),
      map((x: IInfo[]) => new Set(x.map((val: IInfo) => val.type)))
    );
  }

  selectType(type: string) {
    this.selectedType = type;
  }
}
