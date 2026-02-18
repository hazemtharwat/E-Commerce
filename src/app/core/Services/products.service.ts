import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { baseUrl } from '../apiRoot/baseusrl';
import { IsaleList } from '../Interfaces/iproducts';

 @Injectable({
  providedIn: 'root'
})
export class ProductsService {
  images!: IsaleList[]
  private http=inject(HttpClient)
  constructor() { }
//https://fakestoreapi.com/products
getProductList():Observable<any>{
  return this.http.get(`${baseUrl}/products`);
}
cartService():Observable<any>{
return this.http.get(`${baseUrl}/carts`);
}
// https://fakestoreapi.com/products/{id}
getProductdetail(id:string):Observable<any>{
  // return this.http.get(`${baseUrl}/products/${id}`)
  return this.http.get(`${baseUrl}/products/${id}`)
}
  saleList(id:string|null):Observable<IsaleList[]>{
      this.images = [{
    itemImageSrc: '../../../assets/ch 1.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1',
    price: '1000',
     description:' A stylish and comfortable wooden chair crafted from high-quality solid wood. Designed with a minimalist',
    id:1001,
},{
    itemImageSrc: '../../../assets/di1.jpg',
    alt: 'Description for Image 1',
    title: 'Title 2',
     description:'A stylish and comfortable wooden chair crafted from high-quality solid wood. Designed with a minimalist',
    price: '3000',
    id:1002,
},{
    itemImageSrc: '../../../assets/labtop.jpg',
    alt: 'Description for Image 1',
    title: 'Title 3',
    description:'A stylish and comfortable wooden chair crafted from high-quality solid wood. Designed with a minimalist',
    price: '9000',
    id:1003,
},{
    itemImageSrc: '../../../assets/m1.jpg',
    alt: 'Description for Image 1',
    title: 'Title 4',
     description:'A stylish and comfortable wooden chair crafted from high-quality solid wood. Designed with a minimalist',
    price: '15000',
    id:1004,
    
},]
return of (this.images)
} 

  
}
