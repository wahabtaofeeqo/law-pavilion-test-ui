import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  apiUrl: string = 'http://localhost:3000/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  private readonly users = new BehaviorSubject<any[]>([]);

  fetchUsers() {
    return this.http.get<any>(`${this.apiUrl}users`);
  }

  createPatient(patient: any) {
    return this.http.post(`${this.apiUrl}patients`, patient, {headers: this.headers});
  }
}
