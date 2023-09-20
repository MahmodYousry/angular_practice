import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../core/services/products.service';
import { Product } from '../core/interfaces/product';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  productId:string = '';
  productDetails:Product = {} as Product;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }

  constructor (private _activatedRoute: ActivatedRoute, private _productsService: ProductsService) {
    this._activatedRoute.paramMap.subscribe((res:any) => {
      console.log(res);
      this.productId = res.params.id;
    });

    this._productsService.getProductById(this.productId).subscribe({
      next:(res) => {
        console.log(res.data._id);
        this.productDetails = res.data;
      }
    });

  }



}
