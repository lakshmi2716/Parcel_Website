import { Pipe, PipeTransform } from '@angular/core';
import {Order} from './order'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(searchorder : Order[],search : string ){
    console.log(searchorder);
     if (!searchorder || ! search ){
       return searchorder;
     }
      return searchorder.filter(order => order.Suser.toLowerCase().indexOf(search.toLowerCase())!==-1);    
  }
  }


