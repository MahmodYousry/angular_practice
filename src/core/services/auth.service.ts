import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl:string = 'https://ecommerce.routemisr.com';

  constructor(private _http:HttpClient) { }

  register(data:any) : Observable<any> {
    return this._http.post(`${this.apiUrl}/api/v1/auth/signup`, data);
  }
}
