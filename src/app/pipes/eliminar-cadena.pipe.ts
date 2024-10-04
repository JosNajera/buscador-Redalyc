import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eliminarCadena'
})
export class EliminarCadenaPipe implements PipeTransform {

  transform(value: string, pattern: string): string {
    if (!value) {
      return '';
    }
    return value.replace(new RegExp(pattern, 'g'), '');
  }
}
