import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  apiUrl: string = 'https://app-fake-server-api.herokuapp.com/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  private readonly searchTerm = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  private readonly users = new BehaviorSubject<any[]>([]);

  fetchUsers() {
    return this.http.get<any>(`${this.apiUrl}users`);
  }

  createPatient(patient: any) {
    return this.http.post(`${this.apiUrl}patients`, patient, {headers: this.headers});
  }

  fetchPatients() {
    return this.http.get<any>(`${this.apiUrl}patients`);
  }

  setTerm(term: string) {
    this.searchTerm.next(term);
  }

  getTerm() {
    return this.searchTerm.asObservable();
  }

  searchPatient(name: any) {
    let URL = `${this.apiUrl}patients?personal.firstname=` + name;
    return this.http.get<any>(URL);
  }
}
