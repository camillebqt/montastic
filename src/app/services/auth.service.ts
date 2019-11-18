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
    localStorage.clear();

  }

  authenticate(apiKey: string): void {
    this.setApiKey(apiKey);
  }

  setApiKey(key: string): void {
    this.storageService.setStorage(key, 'API_KEY');
  }

  getApiKey(): string {
    return this.storageService.getStorage('API_KEY');
  }

  checkAuth() {
    this.isAuth = (this.storageService.getStorage('API_KEY') != null);
    return this.isAuth;
  }
}
