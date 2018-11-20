import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCap'
})
export class FirstCapPipe implements PipeTransform {

  public transform(text: string): string {
    return text.charAt(0).toUpperCase() + text.substr(1);
  }

}
