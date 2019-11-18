import {Injectable} from '@angular/core';



@Injectable()
export class StorageService {
  constructor() {
  }
  getStorage(key): string {
    return localStorage.getItem(key);
  }
  setStorage(key: string, value: any) {
    localStorage.setItem(key, value);
  }
}
