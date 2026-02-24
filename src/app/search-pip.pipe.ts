import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from './oldProduct';

@Pipe({
  name: 'searchPip',
  standalone: true
})
export class SearchPipPipe implements PipeTransform {

  transform(product: Iproduct[],searchValue:string ): Iproduct[] {
    return  product
  }

}
