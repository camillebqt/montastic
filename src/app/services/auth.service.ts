import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

export class AuthService {
  isAuth = false;
  public redirectUrl: string;
  signIn() {
    return of(this.isAuth = true).pipe(delay(2000));
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
