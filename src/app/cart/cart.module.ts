import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { FilterProductsPipe } from './filter-products.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CartComponent,
    FilterProductsPipe,
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    ReactiveFormsModule
  ]
})
export class CartModule { }
