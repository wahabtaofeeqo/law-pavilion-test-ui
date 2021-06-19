import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  apiUrl: string = 'http://localhost:3000/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  login(username: any, password: any): Observable<any> {
    let URL = `${this.apiUrl}users?email=` + username + `&password=` + password;
    return this.http.get<any>(URL);
  }

  error(error: HttpErrorResponse) {

  }

  setUser(user: any) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  getUser() {
    let user = localStorage.getItem("user");
    return (user != null) ? JSON.parse(user) : null;
  }
}