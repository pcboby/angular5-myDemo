import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'transNull'
})
export class TransNullPipe implements PipeTransform {

  transform(value: any, args ?: any): any {
    return value || '{' + args + '}';
  }

}
