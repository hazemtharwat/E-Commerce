import { Iregister, ILogin, IuserLogedInfo } from './../Interfaces/iauth';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { baseUrl } from '../apiRoot/baseusrl';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  logedinfo=new BehaviorSubject<IuserLogedInfo>({id:0,username:"",email:""})
  // logedinfo=new BehaviorSubject<number>(0)
    private http=inject(HttpClient)
    constructor() { }
  
    Register(userData:Iregister):Observable<any>{
      return this.http.post(`${baseUrl}/users`,userData);
    }
    login(loginData:ILogin):Observable<any>{
      return this.http.post(`https://dummyjson.com/auth/login`,loginData)
    }
    setLogedInfo(userLogedInfo:IuserLogedInfo){
     return this.logedinfo.next(userLogedInfo);
    
    }
    getLogedInfo(){
   return  this.logedinfo.asObservable();
    }
}
