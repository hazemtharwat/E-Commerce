import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../apiRoot/baseusrl';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private http=inject(HttpClient)
  constructor() { }
//https://fakestoreapi.com/products
getProductList():Observable<any>{
  return this.http.get(`${baseUrl}/products`);
}
}
