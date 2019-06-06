import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API, API_PROD } from '../app.api';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  constructor(private http: HttpClient, private router: Router) { }

  transferenciaPOST(dadosTransf) {
    return this.http.post<any>(`${API_PROD}/transacoes/transferir`, dadosTransf);
  }
}
