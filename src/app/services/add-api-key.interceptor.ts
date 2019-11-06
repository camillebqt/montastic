import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('request intercepted successfully!');
    const requestApiKeyWithHeader = this.authService.getApiKey();
    const header = req.clone({ headers: req.headers.set('X-API-KEY', requestApiKeyWithHeader)});
    console.log('Sending request with new header now ...');


    return next.handle(header);
  }
}
