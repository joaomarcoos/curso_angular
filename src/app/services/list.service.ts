import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../Person';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = 'http://localhost:3000/person';

  constructor(private http: HttpClient) { }

  getAll():Observable<Person[]>{
    return this.http.get<Person[]>(this.apiUrl)
  }

  getPerson(id: number): Observable<Person>{
    return this.http.get<Person>(`${this.apiUrl}/${id}`)
  }
}
