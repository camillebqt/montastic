import {Injectable} from '@angular/core';



@Injectable()
export class StorageService {
  constructor() {
  }
  getStorage(): string {
    return sessionStorage.getItem('API_KEY');
}
  setStorage(key: string) {
    sessionStorage.setItem('API_KEY', key);
}
}
