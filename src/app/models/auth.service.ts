import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

export class AuthService {
  isAuth = false;
  signIn() {
    return of(this.isAuth = true).pipe(delay(2000));
  }
      /*setTimeout(() => {
        this.isAuth = true;
        observer.next(true);
      }, 2000);*/
  //}
      // (resolve, reject) => {
      //   this.isAuth = true;
      //   resolve(true);
      // }
    //);
  //}

  signOut() {
    this.isAuth = false;
  }
}
