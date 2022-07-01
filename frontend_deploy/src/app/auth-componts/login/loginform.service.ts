import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';


import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ILogin, UserRes, LoginRes } from '../authmodel/loginModel';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  private LOGIN_URL: string = 'http://localhost:8080/user/login';
  loginError: any;
  constructor(private http: HttpClient, private router: Router) {}

  loginUser(user: LoginRes): Observable<LoginRes> {
    return this.http.post<LoginRes>(this.LOGIN_URL, user);
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
  }
isLoggedIn(){
  return localStorage.getItem("token")
}

}

