import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  standalone: true,
})
export class SearchFilterPipe implements PipeTransform {
  transform(list: any[], filtertext: string) {
    return list
      ? list.filter((item) =>
          item.nomProduit.toLowerCase().includes(filtertext)
        )
      : [];
  }
}
