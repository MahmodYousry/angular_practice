import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent {

  isInvalid: boolean = false;
  loader: boolean = false;
  message: string = ''

  resetPass: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required,Validators.email]),
    newPassword: new FormControl(null, [Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{7,20}$/)])
  })

  constructor (private _authService:AuthService, private _router: Router) {}

  resetPassword(form: any) {
    if (form.valid)
    {
      this.loader = true;

      this._authService.resetPass(form.value).subscribe({
        next: res => this.message = res.message,
        error: err => {
          this.loader = false;
          console.log(err);
          console.log(form.value);
        },
        complete: () => { this._router.navigate(['/login']) }
      });

    }
  }
}
