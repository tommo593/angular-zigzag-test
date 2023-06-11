import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreedService {
  private apiUrl = 'https://api.thedogapi.com';

  constructor(private http: HttpClient) {}

  getBreeds(): Observable<any> {
    const headers = new HttpHeaders().set('x-api-key', 'live_nFbyI4sWStUbleuw6RnZ9kVcWEtlMZB4j0rlhZqBg7XV66JgQTtm3jTwytg3fzl7');
    return this.http.get<any>(this.apiUrl, { headers });
  }

  getBreedById(id: number): Observable<any> {
    const headers = new HttpHeaders().set('x-api-key', 'live_nFbyI4sWStUbleuw6RnZ9kVcWEtlMZB4j0rlhZqBg7XV66JgQTtm3jTwytg3fzl7');
    return this.http.get<any>(`${this.apiUrl}/${id}`, { headers });
  }
};
