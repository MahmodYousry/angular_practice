import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { ProductsComponent } from './products/products.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrdersComponent } from './orders/orders.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: "full"},

  // Essenials
  {path: 'home', canActivate: [authGuard], component: HomeComponent, title: 'Home'},
  {path: 'about', canActivate: [authGuard], component: AboutComponent, title: 'About'},

  // Ecommerce Components
  {path: 'products', canActivate: [authGuard], component: ProductsComponent, title: 'Products'},
  {path: 'brands', canActivate: [authGuard], component: BrandsComponent, title: 'Brands'},
  {path: 'categories', canActivate: [authGuard], component: CategoriesComponent, title: 'Categories'},
  {path: 'productDetails/:id', canActivate: [authGuard], component: ProductDetailsComponent, title: 'Product Details'},
  {path: 'setting', canActivate: [authGuard], loadChildren: () => import('./setting/setting.module').then((x) => x.SettingModule) },

  // standalone component
  {path: 'wishlist', canActivate: [authGuard], loadComponent: () => import('./wishlist/wishlist.component').then((x) => x.WishlistComponent) },

  // cart and Checkout
  {path: 'cart', canActivate: [authGuard], loadChildren: () => import('./cart/cart.module').then((x) => x.CartModule), title: 'Cart'},
  {path: 'checkout/:cartId', loadComponent: () => import('./cart/checkout/checkout.component').then((x) => x.CheckoutComponent), title: 'Checkout'},

  // Login & Register System
  {path: 'register', component: RegisterComponent, title: 'Sign Up'},
  {path: 'login', component: LoginComponent, title: 'Sign In'},
  {path: 'allorders', component: OrdersComponent, title: 'All Orders'},

  {path: 'forgotPassword', component: ForgotPasswordComponent, title: 'forgot passord'},
  {path: 'verficiationPage', component: VerificationCodeComponent, title: 'Email Verification'},
  {path: 'resetPass', component: ResetPassComponent, title: 'Reset User Password'},

  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },

  // Anything that is not Above
  {path: '**', component: NotFoundComponent, title: 'This page is not found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
