import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = "http://ekita-api.herokuapp.com/api/auth/login";

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  loginUser(user){
    return this.http.post<any>(this.loginUrl, user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }
  
  logoutUser(){
    localStorage.removeItem('token')
    this.router.navigate(['/home'])
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
