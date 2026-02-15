import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from './iproduct';

@Pipe({
  name: 'searchPip',
  standalone: true
})
export class SearchPipPipe implements PipeTransform {

  transform(product: Iproduct[],searchValue:string ): Iproduct[] {
    return  product
  }

}
