import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
    rePassword: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(13)]),
  })

  register(form:FormGroup) {
    console.log('hi', form);
  }


}
