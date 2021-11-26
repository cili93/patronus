import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

// The token would usually be created in a different way and stored in localStorage or sessionStorage and pulled from there
const BEARER =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlBhdHJvbnVzIGNvZGUgY2hhbGxlbmdlIiwiaWF0IjoxNTE2MjM5MDIyfQ.ySwvtbpSzdTimko0acSe03Tp6VadH1wCDhYxoNfgH3k';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request.headers.append('Authorization', BEARER);

    return next.handle(request);
  }
}
