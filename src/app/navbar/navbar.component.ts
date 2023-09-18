import { Component } from '@angular/core';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLoggedIn:boolean = false;

  constructor (private _authService: AuthService) {
    this._authService.userData.subscribe((res) => {
      if (this._authService.userData.getValue()) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
    // if there is logged in user assign variable to tell us
    if (this._authService.userData != null) { this.isLoggedIn = true; } else { this.isLoggedIn = false; }
  }


}
