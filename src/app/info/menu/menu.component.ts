import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { InfoService } from 'src/app/info.service';

@Component({
  selector: 'hw-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @Input()
  public items: Set<string>;

  constructor(private data: InfoService) {}

  public changeType(type: string) {
    this.data.selectType(type);
  }
}
