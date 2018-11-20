import { Pipe, PipeTransform } from '@angular/core';
import { IInfo } from 'src/app/data';

@Pipe({
  name: 'distinct'
})
export class DistinctPipe implements PipeTransform {

  public transform(items: IInfo[]): Set<string> {
    return new Set(items.map((val: IInfo) => val.type));
  }
}
