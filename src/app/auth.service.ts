import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register"
  private _loginUrl = "http://localhost:3000/api/login";

  constructor(private http: HttpClient, private _router: Router) { }

  registerUser(user){
    // accepts a user object 
    // returns the response that backend api sends when available
    // in this case, either responds with error or registered user
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user){
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn(){
    // double negate returns boolean
    return !!localStorage.getItem('token')
  }

  logoutUser(){
    localStorage.removeItem('token')
    // change events to login screen
    this._router.navigate(['/home-page'])
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
