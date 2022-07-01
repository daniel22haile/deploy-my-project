import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  token : string | null = '';
  role : string | null = '';

  constructor(private router: Router){}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    this.token = localStorage.getItem('token');
    this.role = localStorage.getItem('Role_Type');

    if(this.token == null){
      this.router.navigate(['/login']);
      return false;
    }

    if(this.token !== null && this.role === "Admin"){
      this.router.navigate(['/product'])
      return false;
    }

     if (this.token !== null && this.role === 'User') {
      //  this.router.navigate(['/'])
       return false;
     }

    return false;
  }

}
