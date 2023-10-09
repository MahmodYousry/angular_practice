import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core/services/products.service';
import { Product } from '../core/interfaces/product';

@Component({
  selector: 'app-featured-productes',
  templateUrl: './featured-productes.component.html',
  styleUrls: ['./featured-productes.component.css']
})
export class FeaturedProductesComponent implements OnInit {

  allProducts:Product[] = [];
  searchKey: string = '';

  constructor (private _productsService:ProductsService) {

  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this._productsService.getProducts().subscribe({
      next: (res) => {
        console.log(res);
        this.allProducts = res.data;
      }, error: (err) => {
        console.log(err);
      }
    });
  }


}
