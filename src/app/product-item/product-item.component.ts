import { Component, Input } from '@angular/core';
import { Product } from '../core/interfaces/product';
import { CartService } from '../shared/services/cart.service';
import { WishlistService } from '../core/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product = {} as Product;

  constructor (private _cartService: CartService, private _wishlistservice:WishlistService) {}

  addToCart(id:string) {
    this._cartService.addProductToCart(id).subscribe({
      next: (res) => {
        this._cartService.numOfCartItems.next(res.numOfCartItems);
      },
      error: (error) => console.log(error)
    });
  }

  // wishlist
  addToWishlist(id:string) {
    return this._wishlistservice.addToWishList(id).subscribe(res => console.log(res));
  }


}
