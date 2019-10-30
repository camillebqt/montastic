import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {ErrorDialogService} from './errordialog.service';
import {API_KEY} from '../models/global';

import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';

@Injectable() export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(private errorDialogService: ErrorDialogService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const API_KEY: string = localStorage.getItem('API_KEY');
    if (API_KEY) {
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + API_KEY)
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
    }));
  }
  catchError(error: HttpErrorResponse) {
    let data = {};
    data = {
      reason: error && error.error.reason ? error.error.reason : '',
      status: error.status
    };
    this.errorDialogService.openDialog(data);
    return throwError(error);
  }
}
