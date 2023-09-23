import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: "full"},

  // Essenials
  {path: 'home', canActivate: [authGuard], component: HomeComponent, title: 'Home'},
  {path: 'about', canActivate: [authGuard], component: AboutComponent, title: 'About'},

  // Ecommerce Components
  {path: 'cart', canActivate: [authGuard], component: CartComponent, title: 'Cart'},
  {path: 'products', canActivate: [authGuard], component: ProductsComponent, title: 'Products'},
  {path: 'brands', canActivate: [authGuard], component: BrandsComponent, title: 'Brands'},
  {path: 'categories', canActivate: [authGuard], component: CategoriesComponent, title: 'Categories'},
  {path: 'productDetails/:id', canActivate: [authGuard], component: ProductDetailsComponent, title: 'Product Details'},
  {path: 'setting', canActivate: [authGuard], loadChildren: () => import('./setting/setting.module').then((x) => x.SettingModule) },

  // Login & Register System
  {path: 'register', component: RegisterComponent, title: 'Sign Up'},
  {path: 'login', component: LoginComponent, title: 'Sign In'},

  // Anything that is not Above
  {path: '**', component: NotFoundComponent, title: 'This page is not found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
