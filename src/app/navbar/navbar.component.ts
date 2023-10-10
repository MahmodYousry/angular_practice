import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/core/services/auth.service';
import { CartService } from '../shared/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  numOfCartItems:number = 0;
  isLoggedIn:boolean = false;

  userName: string = "";

  constructor (private _authService: AuthService, private _cartService: CartService, private _router: Router) { }

  ngOnInit(): void {

    // checks for user data that comes from api
    this._authService.userData.subscribe((res) => {
      if (this._authService.userData.getValue()) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });

    this._cartService.numOfCartItems.subscribe(res => {
      console.log("changing");

      this.numOfCartItems = res;
    });

    this._authService.userData.subscribe(res => {
      if (localStorage.getItem('userToken')) {
        this.userName = res.name
      } else {
        this.userName = "Options"
      }

      console.log(this.userName);
    })

    console.log('isLoggedIn = ', this.isLoggedIn);

  }

  logOut() {
    localStorage.removeItem('userToken');
    this._authService.userData.next(null);
    this.isLoggedIn = false;
    this._router.navigate(['/login']);
  }


}
