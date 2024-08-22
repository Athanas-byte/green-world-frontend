import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Assuming you have some authentication logic to check if the user is an admin
    const isAdmin = true; // Replace this with your actual logic to check if the user is an admin

    if (isAdmin) {
      return true; // Allow access
    } else {
      // Redirect to some unauthorized page or handle as per your application logic
      return this.router.parseUrl('/unauthorized');
    }
  }
}
