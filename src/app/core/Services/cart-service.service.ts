import { observable } from './../../../../node_modules/angular-cli-ghpages/node_modules/rxjs/src/internal/symbol/observable';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { baseUrl } from '../apiRoot/baseusrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private _http=inject(HttpClient)

  constructor() { }
// https://fakestoreapi.com/carts
  getCartData():Observable<any>{
    return this._http.get(`${baseUrl}/carts`)
  }
}
