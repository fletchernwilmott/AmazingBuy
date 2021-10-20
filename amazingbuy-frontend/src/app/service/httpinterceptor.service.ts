import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './auth.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}
  token: any = sessionStorage.getItem('token');
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      req.url.includes('login') ||
      req.url.includes('signup') ||
      req.url.includes('payment')
    )
      return next.handle(req);
    if (this.authenticationService.isUserLoggedIn()) {
      const authReq = req.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`,
        }),
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
