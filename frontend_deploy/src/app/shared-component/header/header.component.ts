import {Component, OnInit} from '@angular/core'
import { LoginService } from 'src/app/auth-componts/login/loginform.service';
import { SignupService } from 'src/app/auth-componts/signup/signupform.service';

@Component({
  selector : 'app-header',
  templateUrl : './header.component.html'
})

export class HeaderComponent implements OnInit {

  constructor(public loginService: LoginService, public signupService : SignupService){}
  ngOnInit() {}

}
