import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from '../core/services/wishlist.service';
import { Product } from '../core/interfaces/product';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlist!: Product[]
  wishListCount: number = 0;

  constructor(private _wishlistservice:WishlistService) { }

  ngOnInit(): void {
    this._wishlistservice.getWishList().subscribe({
      next: (res) => {
        this.wishlist = res.data
        this.wishListCount = res.count
        console.log(res);
      }

    });
  }

  removeFromWishList(id: string) {
    this._wishlistservice.removeFromWishList(id).subscribe({
      next: res => console.log(res),
      error: err => console.warn(err),
      complete: () => {
        this._wishlistservice.getWishList().subscribe({
          next: (res) => {
            this.wishlist = res.data
            this.wishListCount = res.count
            console.log(res);
          }
        });
      },

    });
  }

}
