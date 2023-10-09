import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  addedToWishlist:boolean = false;
  numOfWishlistItems:BehaviorSubject<any> = new BehaviorSubject(0);

  constructor(private _httpClient:HttpClient) { }

  getWishList(): Observable<any> {
    return this._httpClient.get('https://ecommerce.routemisr.com/api/v1/wishlist');
  }

  getNumOfWishlistItems() {
    this.getWishList().subscribe({
      next: res => this.numOfWishlistItems.next(res.count)
    })
  }

  removeFromWishList(id: string): Observable<any> {
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`);
  }

  addToWishList(id: string): Observable<any> {
    this.addedToWishlist = true
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
      productId: id,
    });
  }

}
