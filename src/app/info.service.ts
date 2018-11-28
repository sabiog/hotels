import { Injectable } from '@angular/core';
import {data, IInfo} from 'src/app/data';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private selectedType = 'all';
  private selectedItem: IInfo = {
    'img': '',
    'img2': '',
    'address': '',
    'phone': 0,
    'weather': {
      'title': '',
      'icon': '',
      'water': undefined,
      'temperature': undefined
    },
    'social_info': {
      'title': '',
      'img': '',
      'followers': 0,
      'following': 0
    },
    'type': ''
  };

  public getData = () => data;

  public selectType(type: string) {
    this.selectedType = type;
  }

  public getSelectedType(): string {
    return this.selectedType;
  }

  public getSelectedItem(): IInfo {
    return this.selectedItem;
  }

  public selectItem(item: IInfo) {
    this.selectedItem = item;
  }
}
