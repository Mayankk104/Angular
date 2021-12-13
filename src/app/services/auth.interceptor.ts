import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { exhaustMap, map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _auth: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this._auth.user$.pipe(
      take(1),
      exhaustMap(user => {
        let clone;
        if (!!user)
          clone = request.clone({ headers: request.headers.set('Authorization', user.token) });
        else
          clone = request.clone();

        return next.handle(clone);
      })
    )
  }
}
