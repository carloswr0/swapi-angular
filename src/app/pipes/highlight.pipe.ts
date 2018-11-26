import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightSearch implements PipeTransform {
  transform(value: any, args: any): any {
    var re = new RegExp(args, 'gi');
    if (args === "" || args === " ") {
      return value;
    } else {
      let a =`<em class="search-highlight">${args}</em>`
      const htmltemplate = value.replace(re, a);
      return htmltemplate;
    }
  }
}
