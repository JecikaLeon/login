import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router){}

  canActivate(
    //route: ActivatedRouteSnapshot,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      if(!this.auth.isLoggedIn()){
        this.router.navigateByUrl('/login');
        return false;
      }
    return true;
  }
}
