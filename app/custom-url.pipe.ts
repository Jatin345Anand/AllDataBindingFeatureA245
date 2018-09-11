import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customUrl'
})
export class CustomUrlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
