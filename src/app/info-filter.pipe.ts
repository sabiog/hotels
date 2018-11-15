import { Pipe, PipeTransform } from '@angular/core';
import { IInfo } from 'src/app/data';

@Pipe({
  name: 'infoFilter'
})
export class InfoFilterPipe implements PipeTransform {

  public transform(items: IInfo[], type: string): IInfo[] {
    if (!type || type === 'all') {
      return items;
    }
    return items.filter((item: IInfo) => {
      return item.type === type;
    });
  }
}
