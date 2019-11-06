import { ActivatedRouteSnapshot, Router, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const url: string = state.url;
    if (this.authService.isAuth) {
      return true;
    } else {
      this.authService.redirectUrl = url;
      this.router.navigate(['/auth'], {queryParams: {returnUrl: state.url}});
    }

  }
}
