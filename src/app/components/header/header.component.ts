import { ContaService } from './../../services/conta.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IUsuario } from 'src/app/models/usuario.model';
import { IConta } from 'src/app/models/conta.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private usuarioService: UsuarioService, private contaService: ContaService) { }

  usuario: IUsuario = {
    _id: null,
    dsEmail: null,
    nrCPF: null,
    sobrenomeUsuario: null,
    nmUsuario: null,
    __v: null
  };
  conta: IConta = {
    favorecidos: null,
    nrAgencia: null,
    nrBanco: null,
    nrConta: null,
    transacoes: null,
    vlSaldo: null,
    usuario: null,
    __v: null,
    id: null,
  };
  ngOnInit() {
    this.getContaUsuario();
  }

  deslogarUsuario() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  getContaUsuario() {
    this.usuarioService.getUsuario().subscribe(
      resUsuario => {
        this.usuario = resUsuario;
        this.contaService.getConta().subscribe(
          resConta => {
            this.conta = resConta[0];
          },
          errConta => {
          console.log(errConta);
        });
      },
      errUsuario => {
        if (errUsuario.error.auth === false) {
          localStorage.removeItem('token');
          this.router.navigate(['/']);
        } else {
          console.log(errUsuario);
        }
      });
  }

}
