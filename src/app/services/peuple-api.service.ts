import { Injectable } from '@angular/core';
import Quidam from './quidam';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PeupleApiService {
  readonly url = 'http://localhost:3000/peuple';

  constructor(private http: HttpClient) {}

  getDate() {
    return new Date();
  }

  getAll(): Observable<Quidam[]> {
    return this.http.get<Quidam[]>(this.url);
  }

  deleteQuidam(id: number): Observable<Quidam> {
    return this.http.delete<Quidam>(`${this.url}/${id}`);
  }
}
