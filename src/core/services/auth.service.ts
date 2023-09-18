import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl:string = 'https://ecommerce.routemisr.com';

  userData: BehaviorSubject<any> = new BehaviorSubject("");

  constructor(private _http:HttpClient) {
    if (localStorage.getItem('userToken')) {
      this.getUserData();
    }
  }

  getUserData() {
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    // to decode the token
    let encoded = jwtDecode(encodedToken);
    console.log(encoded);
    this.userData.next(encoded);
  }

  register(data:any) : Observable<any> {
    return this._http.post(`${this.apiUrl}/api/v1/auth/signup`, data);
  }

  login(data:any) : Observable<any> {
    return this._http.post(`${this.apiUrl}/api/v1/auth/signin`, data);
  }

  logout() {
    localStorage.removeItem('userToken');
  }

}
