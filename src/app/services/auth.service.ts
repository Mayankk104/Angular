import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { localUser } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  host = `${environment.backendURL}/users`;
  user: localUser | null = JSON.parse(localStorage.getItem('user') || 'null');;
  user$: BehaviorSubject<localUser | null> = new BehaviorSubject(JSON.parse(localStorage.getItem('user') || 'null'));

  constructor(private _http: HttpClient, private _router: Router) { }

  login(requestBody: { email: string, password: string }) {
    this._http.post<any>(`${this.host}/login`, requestBody).subscribe(user => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user))
        this.user = user;
        this.user$.next(user);
        this._router.navigateByUrl('tasks');
      }
    })
  }

  signup(requestBody: { email: string, password: string, name: string }) {
    return this._http.post(this.host, requestBody);
  }

  logout() {
    this._http.post<any>(`${this.host}/logout`, {}).subscribe(response => {
      localStorage.removeItem('user');
      this.user$.next(null);
      this._router.navigateByUrl('auth/signin');
    })
  }

}
