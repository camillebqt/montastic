import {Observable} from 'rxjs';

export class AuthService {

  isAuth = false;
  signIn() {
    return new Observable(observer => {
      setTimeout(() => {
        this.isAuth = true;
        observer.next(true);
      }, 2000);
    }
      // (resolve, reject) => {
      //   this.isAuth = true;
      //   resolve(true);
      // }
    );
  }

  signOut() {
    this.isAuth = false;
  }
}
