import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trocaPontoVirgula'
})
export class TrocaPontoVirgulaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value){
      return null;
    } else {
      return value.replace(',', '@').replace('.', ',').replace('@', '.');
    }
  }

}
