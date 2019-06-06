import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API, API_PROD } from '../app.api';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient, private router: Router) { }



  fazerLogin2(login) {
    return this.http.post<any>(`${API_PROD}/usuario/logon`, login);
  }

  pegarToken() {
    return localStorage.getItem('token');
  }

  deslogarUsuario() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  usuarioEstaLogado() {
    return !!localStorage.getItem('token');
  }

}
