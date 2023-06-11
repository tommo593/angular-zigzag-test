import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreedService {
  private apiUrl = 'https://dog.ceo/api/breeds/list/all';

  constructor(private http: HttpClient) {}

  getBreeds(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getBreedById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}