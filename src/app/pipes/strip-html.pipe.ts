import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripHtml'
})
export class StripHtmlPipe implements PipeTransform {

  transform(value:  
    string): string {
       const tmp = document.createElement('div');
       tmp.innerHTML = value;
       return tmp.textContent || tmp.innerText || '';
     }
}
