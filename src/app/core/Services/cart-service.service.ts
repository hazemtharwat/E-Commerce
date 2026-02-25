import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { baseUrl } from '../apiRoot/baseusrl';
import { Observable } from 'rxjs';
import { Icart, Iproducts } from '../Interfaces/iproducts';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private _http=inject(HttpClient)

  constructor() { }
// https://dummyjson.com/carts
  getCartData(id:number):Observable<any>{
    return this._http.get(`https://dummyjson.com/carts/${id}`)
  }
  addToCart(CartData:Icart):Observable<any>{
    return this._http.post(`https://dummyjson.com/carts/add`,CartData)
  }
}
