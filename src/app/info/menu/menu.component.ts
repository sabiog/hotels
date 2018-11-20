import { Component, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'hw-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @Input()
  public items: Set<string>;

  @Output() typeChange = new EventEmitter();

  changeType(type: string) {
    this.typeChange.emit(type);
  }
}
