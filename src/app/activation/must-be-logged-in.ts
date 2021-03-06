import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class MustBeLoggedIn implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!!localStorage.getItem('username'))
      return true;

    console.log("no, no, no...");
    this.router.navigate(['/login']);
    return false;
  }
}