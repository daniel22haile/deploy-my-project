import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
  // AsyncValidatorFn,
  // ValidationErrors,
  // FormControl,
  // AbstractControl,
} from '@angular/forms';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SignupService } from './signupform.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signupform.component.html',
})
export class SignupComponent implements OnInit, OnDestroy {
  signupForm!: UntypedFormGroup;
  subscription!: Subscription;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private service: SignupService,
    private router: Router
  ) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstname: ['Daniel', Validators.required],
      lastname: ['Haile', [Validators.required, Validators.minLength(3)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^([a-zA-Z0-9]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,5})$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(4)]],
      phone: ['206-806-3233', Validators.required],
      role: ['Admin or User', Validators.required]
    });
  }

  //Register method
  onRegister(signupForm: UntypedFormGroup) {
    if (signupForm.valid) {
      this.subscription = this.service
        .registerUser(signupForm.value)
        .subscribe((res) => {
          localStorage.setItem('STORAGE', JSON.stringify(res));
          console.log(`get the response`, res);
          this.router.navigate(['/login']);
        });
    } else {
      this.router.navigate(['/signup']);
    }
  }

  ngOnDestroy() {
    if (!this.subscription) {
      return;
    }else{
      this.subscription.unsubscribe();
    }
  }
}
