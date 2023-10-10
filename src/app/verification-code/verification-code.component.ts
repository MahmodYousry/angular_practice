import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.css']
})
export class VerificationCodeComponent {

  isLoading:boolean = false;

  constructor (private _authService: AuthService, private _router:Router) {}

  formVerificationCode: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required, Validators.maxLength(6)])
  })

  sendResetCode(form: any) {
    if (form.valid) {
      this.isLoading = true;
      this._authService.verifyCode(form.value.resetCode).subscribe({
        next: res => console.log(res),
        complete: () => this._router.navigate(['/resetPass'])
      });
    } else { this.isLoading = false; }
  }

}
