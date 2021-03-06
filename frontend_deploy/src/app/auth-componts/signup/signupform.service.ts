import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ISignup } from '../authmodel/signupModel';

@Injectable()
export class SignupService {
  private REGISTER_URL: string = 'http://localhost:8080/user/register';

  constructor(private http: HttpClient) {}
  registerUser(user: ISignup[]): Observable<ISignup[]> {
    return this.http.post<ISignup[]>(this.REGISTER_URL, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
}
