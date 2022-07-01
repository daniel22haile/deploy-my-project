import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ILogin, LoginRes } from '../authmodel/loginModel';
import { LoginService } from './loginform.service';

@Component({
  selector: 'app-signup',
  templateUrl: './loginform.component.html',
})
export class LoginComponent implements OnInit, OnDestroy {
  loginError: string = '';
  userlogin: ILogin = new ILogin('', '');
  loginForm!: UntypedFormGroup;
  loading: boolean = false;

  subscription!: Subscription;
  hide: boolean = true;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private service: LoginService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [
        this.userlogin.email,
        [
          Validators.required,
          Validators.pattern('^([a-zA-Z0-9]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,3})$'),
        ],
      ],
      password: [this.userlogin.password, Validators.required],
    });
  }

  onLogin() {
    // console.log(this.loginForm.valid);
    // console.log(this.loginForm.value.email);
    //     console.log(this.loginForm.value.password);

    if (this.loginForm.valid) {
      this.service.loginUser(this.loginForm.value).subscribe((res: any) => {
        if (res.status === 'success') {
          console.log(JSON.stringify(res));
          localStorage.setItem('status', JSON.stringify(res.status));
          localStorage.setItem('token', JSON.stringify(res.token));
          this.loginError = '';
          this.router.navigate(['/product-list']);
        } else {
          this.loginError = 'Invalid password and email!!';
        }
      });
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
