import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://ekita-api.herokuapp.com/api/users';

  constructor(private http: HttpClient) {
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
  deleteUser(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}