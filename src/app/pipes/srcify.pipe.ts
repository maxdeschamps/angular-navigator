import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'srcify'
})
export class SrcifyPipe implements PipeTransform {

  transform(value: string): unknown {
    return "assets/" + value.toLowerCase().replace(' ' ,'') + ".png";
  }

}
