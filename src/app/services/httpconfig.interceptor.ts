import {HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('request intercepted successfully!');
    const header = req.clone({ headers: req.headers.set('API_KEY', sessionStorage.getItem('API_KEY'))});
    console.log('Sending request with new header now ...');


    return next.handle(header).pipe(catchError((error) => {

      console.log('Error Occurred');
      console.log(error);
      return Observable.throw(error);
    })) as any;
  }
  /*intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const API = req.clone(sessionStorage.getItem('API_KEY'));
    return next.handle(req);
  }*/

}






/*interface HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> }*/
      /*const request: string = sessionStorage.getItem('API_KEY');
      let newHeaders = request.headers;*/

/*if (request) {
        request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + request);
        });
      }
      if (!request.headers.has('Content-Type')) {
          request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        } request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
          return next.handle(request).pipe(
          map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              console.log('event--->>>', event);
            }
            return event;
          }));*/
