import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textChange'
})
export class TextChangePipe implements PipeTransform {

  transform(value: string): string {

    return value.replace(',','===');
  }

}
