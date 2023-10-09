import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../shared/services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  carId:string = ''
  shipingAddress: FormGroup = new FormGroup({
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null),

  });

  constructor(private _cartService:CartService, private _activatedRoute:ActivatedRoute) {
    this._cartService.cartId.subscribe(res => {
        this.carId  = res
      }
    );
    // this._activatedRoute.paramMap.subscribe((res:any) => {
    //   this.carId = res.params.cartId
    // });
  }

  handleOnline() {
    this._cartService.generateOnlinePayment(this.carId, this.shipingAddress.value).subscribe({
      next: res => {
        location.href = res.session.url
      },
      error: (error) => console.log(error),
    });
  }

}
