import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    constructor (private _cartService:CartService) { }

    ngOnInit(): void {
      this.getCart();
    }

    getCart() {
      this._cartService.getCart().subscribe({
        next:(res) => {console.log(res)}
      })
    }

}
