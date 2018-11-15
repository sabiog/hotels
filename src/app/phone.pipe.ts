import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phoneNumber: number): string {
    const phone: string = '+' + phoneNumber.toString();
    let newStr = '';
    for (let i = 1; i <= phone.length; i++) {
      if (i === 3 || i === 5) { newStr = '-' + newStr; }
      if (i === 8) { newStr = ') ' + newStr; }
      if (i === 11) { newStr = ' (' + newStr; }
      newStr = phone.charAt(phone.length - i) + newStr;
    }
    return newStr;
  }
}
