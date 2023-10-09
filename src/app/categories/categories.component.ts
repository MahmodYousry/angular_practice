import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core/services/products.service';
import { Category } from '../core/interfaces/category';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  allCategories:Category[] = [];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin: 20,
    navText: ['', ''],
    responsive: {
      0: {
        items: 8
      }
    },
    nav: true
  }

  constructor (private _productService: ProductsService) {

  }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories() {
    this._productService.getCategories().subscribe({
      next: (res) => {
        console.log(res);
        this.allCategories = res.data;
      }
    });
  }


}
