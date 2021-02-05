import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'product'
})
export class Pipe1Pipe implements PipeTransform {

  transform(value:number, multiplier:number):number {
    return value*multiplier;
  }

}
