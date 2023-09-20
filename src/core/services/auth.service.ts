import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl:string = 'https://ecommerce.routemisr.com';

  userData: BehaviorSubject<any> = new BehaviorSubject(null);


  constructor(private _http:HttpClient, private _router: Router) {
    if (localStorage.getItem('userToken')) {
      this.getUserData();
    }
  }

  getUserData() {
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    // to decode the token
    let encoded = jwtDecode(encodedToken);
    this.userData.next(encoded);
  }

  register(data:any) : Observable<any> {
    return this._http.post(`${this.apiUrl}/api/v1/auth/signup`, data);
  }

  login(data:any) : Observable<any> {
    return this._http.post(`${this.apiUrl}/api/v1/auth/signin`, data);
  }

  logOut() {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._router.navigate(['/login']);
  }

  authCheck() {
    if (localStorage.getItem('userToken') != null) {
      this._router.navigate(['/home']);
    }
  }

}
