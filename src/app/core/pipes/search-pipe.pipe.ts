import { Iproducts } from './../Interfaces/iproducts';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'searchPipe',
  standalone: true
})
export class SearchPipePipe implements PipeTransform {
  
  transform(product:Iproducts[],searchValue:string): Iproducts[] {
    if(!product) return []
    if(!searchValue) return product
    return product.filter((item)=>{
      item.title.includes(searchValue)
    })
  }

}
