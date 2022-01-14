import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenService} from "../service/token.service";
const TOKEN_HEADER_KEY = 'Authorization'
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("interceptor called");
    let authReq = request;
    const token = this.tokenService.getToken();
    if (token!=null){
      authReq = request.clone({headers: request.headers.set(TOKEN_HEADER_KEY,'Bearer'+token)})
    }
    return next.handle(authReq);
  }
}
export const httpInterceptorProvider = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}
]
