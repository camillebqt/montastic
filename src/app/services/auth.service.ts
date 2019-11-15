import {of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {StorageService} from './storage.service';

export class AuthService {
  constructor(private storageService: StorageService) {}
  isAuth = false;
  signIn() {
    return of(this.isAuth = true).pipe(delay(2000));
  }

  signOut() {
    this.isAuth = false;
    sessionStorage.clear();

  }

  authenticate(apiKey: string): void {
    this.setApiKey(apiKey);
  }

  setApiKey(key: string): void {
    this.storageService.setStorage(key);
    //sessionStorage.setItem('API_KEY', key);
  }

  getApiKey(): string {
    return this.storageService.getStorage();
    //return sessionStorage.getItem('API_KEY');
  }

  checkAuth() {
    this.isAuth = (sessionStorage.getItem('API_KEY') != null);
    return this.isAuth;
  }
}
