import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtre',
})
export class FiltrePipe implements PipeTransform {
  transform(
    liste: string[],
    regex_str: string,
    strict: boolean = true
  ): string[] {
    // const regex = /b/i;
    let regex = new RegExp(regex_str);
    if (!strict) regex = new RegExp(regex_str, 'i');
    return liste.filter((s) => regex.test(s));
  }
}
