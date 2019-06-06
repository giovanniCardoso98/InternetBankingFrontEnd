import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API, API_PROD } from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  constructor(private http: HttpClient) { }

  transacoesGET(filtro) {
    return this.http.post<any>(`${API_PROD}/transacoes/extrato`, filtro);
  }

}
