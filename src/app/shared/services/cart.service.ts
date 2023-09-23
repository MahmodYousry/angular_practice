import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  apiUrl:string = 'https://ecommerce.routemisr.com';

  constructor(private _http: HttpClient) { }

  addProductToCart(id:string) : Observable<any> {
    return this._http.post(`${this.apiUrl}/api/v1/cart`, {
      productId: id
    }, {
      headers: {
        token: `${localStorage.getItem('userToken')}`
      }
    });
  }

  getCart() : Observable<any> {
    return this._http.get(`${this.apiUrl}/api/v1/cart`, {
      headers: {
        token: `${localStorage.getItem('userToken')}`
      }
    });
  }

}
