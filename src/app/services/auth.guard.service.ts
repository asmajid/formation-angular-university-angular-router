import { Router } from 'express';
import { AuthStore } from './auth.store';
import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateChildFn, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private auth: AuthStore, private router:Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.auth.isLoggedIn$
      .pipe(
        map(loggedIn =>
            loggedIn? true: this.router.parseUrl('/login'))
      );

  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.checkIfAutenticated();
  }

  checkIfAutenticated(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.auth.isLoggedIn$
      .pipe(
        map(loggedIn =>
            loggedIn? true: this.router.parseUrl('/login'))
      );
  }
}
