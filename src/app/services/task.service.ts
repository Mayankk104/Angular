import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private host = `${environment.backendURL}/tasks`;
  constructor(private _http: HttpClient, private _auth: AuthService) { }

  getTasks() {
    if (this._auth?.user)
      return this._http.get<any[]>(this.host)
    else
      return null;
  }

  addTask(task: string) {
    return this._http.post(this.host, { description: task })
  }

  removeTask(_id: string) {
    return this._http.delete(`${this.host}/${_id}`);
  }

  updateTask(_id: string, description: string) {
    return this._http.patch(`${this.host}/${_id}`, { description });
  }

}
