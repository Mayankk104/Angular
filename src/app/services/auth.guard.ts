import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _auth: AuthService, private router: Router) { }

  canActivate(): Observable<boolean | UrlTree> {
    return this._auth.user$.pipe(map(user => {
      if (user)
        return this.router.createUrlTree(['tasks']);
      else
        return true;
    }))
  }

}
