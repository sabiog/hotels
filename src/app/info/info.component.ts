import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { data, IInfo } from 'src/app/data';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'hw-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public items$: Observable<IInfo[]>;
  public selectedType = 'all';

  @Output() itemSelect = new EventEmitter();

  ngOnInit() {
    this.items$ = data;
  }

  selectType(type: string) {
    this.selectedType = type;
  }

  getAdditionalInfo(item: IInfo) {
    this.itemSelect.emit(item);
  }
}
