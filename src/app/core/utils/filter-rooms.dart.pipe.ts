import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRoomsDart'
})
export class FilterRoomsDartPipe implements PipeTransform {

  transform(items:any[], filterBy: string): any[] {
    if(!items || !filterBy){
      return items;
    }
    return items.filter(item =>
      item.type.toLowerCase().includes(filterBy.toLocaleLowerCase()) ||
      item.location.toLowerCase().includes(filterBy.toLocaleLowerCase()) ||
      item.base_cost.toLowerCase().includes(filterBy.toLocaleLowerCase())
    );
  }

}
