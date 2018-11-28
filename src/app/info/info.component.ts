import { Component, OnInit } from '@angular/core';
import { IInfo } from 'src/app/data';
import { InfoService } from 'src/app/info.service';

@Component({
  selector: 'hw-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public items$: IInfo[];

  constructor(private data: InfoService) {}

  ngOnInit() {
    this.data.getData().subscribe((data: IInfo[]) => { this.items$ = data; });
  }

  public getSelectedType(): string {
    return this.data.getSelectedType();
  }

  public selectItem(item: IInfo) {
    this.data.selectItem(item);
  }
}
