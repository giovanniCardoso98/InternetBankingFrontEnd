import { Favorecido } from 'src/app/models/favorecido.model';
import { Transacao } from './transacao.model';

export class IConta {
  favorecidos: Favorecido[];
  nrAgencia: number;
  nrBanco: number;
  nrConta: number;
  transacoes: Transacao[];
  vlSaldo: number;
  usuario: string;
  __v: number;
  id: string;
}

export class Conta implements IConta {
  constructor(
    public favorecidos: Favorecido[],
    public nrAgencia: number,
    public nrBanco: number,
    public nrConta: number,
    public transacoes: Transacao[],
    public vlSaldo: number,
    public usuario: string,
    public __v: number,
    public id: string
  ) { }
}