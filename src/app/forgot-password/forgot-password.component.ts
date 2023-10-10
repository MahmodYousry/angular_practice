import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  isLoading:boolean = false;

  constructor (private _authService: AuthService, private _router:Router) {}

  ForgotPasswordForm:FormGroup = new FormGroup({
    email: new FormControl(null, [ Validators.required, Validators.email ])
  });

  sendEmail(form:any) {
    if (form.valid) {
      this.isLoading = true;
      this._authService.forgotPass(form.value).subscribe({
        next: res => console.log(res),
        error: err => {
          console.warn(err);
          this.isLoading = false;
        },
        complete: () => {
          this._router.navigate(['/verficiationPage'])
        }
      })
    } else {
      this.isLoading = false;
    }
  }




}
