import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  isLoading:boolean = false;
  apiError:string = '';
  isNotValidForm:boolean = false;

  constructor (private _authService: AuthService, private _router: Router) {
    _authService.authCheck();
  }

  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
    rePassword: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(13)]),
  })

  register(form:FormGroup) {
    console.log('hi', form);
    if (form.valid) {
      this.isLoading = true;
      this._authService.register(form.value).subscribe({
        next:(res:any) => {
          console.log(res);
          this.isLoading = false;
          this._router.navigate(['/login']);
        },
        error: (err) => {
          this.isLoading = false;
          // console.log(err);
          this.apiError = err.error.message;
        }
      });
    } else {
      this.isNotValidForm = true;
    }
  }


}
function subscribe(arg0: {}) {
  throw new Error('Function not implemented.');
}

