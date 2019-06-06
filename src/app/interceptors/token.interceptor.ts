import { API, API_PROD } from './../app.api';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const urlAPI = API_PROD.split('/')[2];
    const urlReq = req.url.split('/')[2];
    const newReq = req.clone({setHeaders: {'x-access-token': localStorage.getItem('token')}});

    if(localStorage.getItem('token') && urlAPI === urlReq) {
      return next.handle(newReq);
    } else {
      return next.handle(req);
    }
  }
}