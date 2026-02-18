import { Iregister, ILogin } from './../Interfaces/iauth';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../apiRoot/baseusrl';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

    private http=inject(HttpClient)
    constructor() { }
  
    Register(userData:Iregister):Observable<any>{
      return this.http.post(`${baseUrl}/users`,userData);
    }
    login(loginData:ILogin):Observable<any>{
      return this.http.post(`${baseUrl}/auth/login`,loginData)
    }
  
}
