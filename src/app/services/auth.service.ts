import {of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {Router} from '@angular/router';

export class AuthService {
  isAuth = false;
  public redirectUrl: string;
  constructor(private router: Router) {}
  signIn() {
    return of(this.isAuth = true).pipe(delay(2000));
    if (this.redirectUrl) {
      this.router.navigate([this.redirectUrl]);
      this.redirectUrl = null;
    }
  }
  signOut() {
    this.isAuth = false;
  }
  authenticate(apiKey: string): void {
    this.setApiKey(apiKey);
  }
  setApiKey(key: string): void {
    sessionStorage.setItem('API_KEY', key);
  }
  getApiKey(): string {
    return sessionStorage.getItem('API_KEY');
  }
}
