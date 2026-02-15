import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../apiRoot/baseusrl';
import { Iregister } from '../Interfaces/iregister';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  private http=inject(HttpClient)
  constructor() { }

  Register(userData:Iregister):Observable<any>{
    return this.http.post(`${baseUrl}/users`,userData);
  }
}
