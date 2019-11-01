import {HttpEvent, HttpHandler, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';


interface HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> }
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
