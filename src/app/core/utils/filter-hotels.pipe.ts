import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterHotels'
})
export class FilterHotelsPipe implements PipeTransform {

  transform(items:any[], filterBy: string): any[] {
    if(!items || !filterBy){
      return items;
    }
    return items.filter(item =>
      item.name.toLowerCase().includes(filterBy.toLocaleLowerCase()) ||
      item.location.toLowerCase().includes(filterBy.toLocaleLowerCase()) ||
      item.details.toLowerCase().includes(filterBy.toLocaleLowerCase())
    );
  }

}
