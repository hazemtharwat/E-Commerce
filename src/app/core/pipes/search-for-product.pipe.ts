import { Pipe, PipeTransform } from '@angular/core';
import { Iproducts } from '../Interfaces/iproducts';

@Pipe({
  name: 'searchForProduct',
  standalone: true
})
export class SearchForProductPipe implements PipeTransform {

  transform(products :Iproducts[],searchValue:string): Iproducts[] {
        if(!products) return []
    if(!searchValue) return products
    return products.filter((item)=>{
      return  item.title.toLowerCase().includes(searchValue.toLocaleLowerCase())
    })
  }

}
