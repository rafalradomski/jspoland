import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'multi'
})
export class ScorePipe implements PipeTransform {

  transform(value: number, multi: number): any {
    return value * multi;
  }

}
