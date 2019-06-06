declare var $: any;
import { ITranferencia } from './../../models/transferencia.model';
import { TransferenciaService } from './../../services/transferencia.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IUsuario, Usuario } from 'src/app/models/usuario.model';
import { IConta } from 'src/app/models/conta.model';
import { ContaService } from 'src/app/services/conta.service';

@Component({
  selector: 'app-transferencias',
  templateUrl: './transferencias.component.html',
  styleUrls: ['./transferencias.component.scss']
})
export class TransferenciasComponent implements OnInit {

  transferencia: ITranferencia = {
    contaOrigem: null,
    agenciaOrigem: null,
    contaDestino: null,
    agenciaDestino: null,
    valor: null,
    observacao: null
  };

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

  constructor(private router: Router, private usuarioService: UsuarioService, private contaService: ContaService, private transferenciaService: TransferenciaService) { }

  ngOnInit() {
    this.getContaUsuario();
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

  realizaTransferencia() {
    this.transferencia.agenciaOrigem = this.conta.nrAgencia;
    this.transferencia.contaOrigem = this.conta.nrConta;
    this.transferenciaService.transferenciaPOST(this.transferencia)
      .subscribe(
        res => {
          $('.modal-login h1').html("Transferência realizada com sucesso!"),
              $('.modal-login').css('height', $('body').height()).addClass('ativo');
              this.getContaUsuario();
        },
        err => {
          if (err.error.auth === false) {
            localStorage.removeItem('token');
            this.router.navigate(['/']);
          } else {
            $('.modal-login h1').html(err.error.mensagem),
              $('.modal-login').css('height', $('body').height()).addClass('ativo');
          }
        }
      );
  }

  fecharModal() {
    $('.modal-login').removeClass('ativo');
    this.router.navigate(['/extrato']);
  }

}
