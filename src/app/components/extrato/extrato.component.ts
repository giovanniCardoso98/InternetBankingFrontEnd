declare var $: any;

import { Component, OnInit } from '@angular/core';
import { ExtratoService } from 'src/app/services/extrato.service';
import { Router } from '@angular/router';
import { IConta } from 'src/app/models/conta.model';
import { ContaService } from './../../services/conta.service';
import { Extrato } from 'src/app/models/extrato.models';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  extrato: Extrato[] = [];

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

  constructor(private extratoService: ExtratoService, private contaService: ContaService, private router: Router) { }

  ngOnInit() {
    this.buscarExtrato();
    this.buscarConta();
  }

  buscarExtrato() {
    this.extratoService.transacoesGET('filtro')
      .subscribe(
        res => {
          this.extrato = res;
        },
        err => {
          if (err.error.auth === false) {
            localStorage.removeItem('token');
            this.router.navigate(['/']);
          } else {
            console.log(err);
          }
        }
      );
  }

  buscarConta() {
    this.contaService.getConta().subscribe(
      res => {
        this.conta = res[0];
      },
      err => {
        if (err.error.auth === false) {
          localStorage.removeItem('token');
          this.router.navigate(['/']);
        } else {
          console.log(err);
        }
      });
  }

}
