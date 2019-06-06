import { API, API_PROD } from '../app.api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor(private http: HttpClient) {
  }

  getConta() {
    return this.http.post<any>(`${API_PROD}/conta`, '');
  }
}
