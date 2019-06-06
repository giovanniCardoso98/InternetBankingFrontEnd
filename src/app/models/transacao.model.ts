export class ITransacao {
  _id: string;
  vlAtual: number;
  vlAnterior: number;
  observacao: string;
  agenciaRef: number;
  contaRef: number;
  vlTransacao: number;
  tpTransacao: string;
  dtTransacao: string

}

export class Transacao implements ITransacao {
  constructor(
    public _id: string,
    public vlAtual: number,
    public vlAnterior: number,
    public observacao: string,
    public agenciaRef: number,
    public contaRef: number,
    public vlTransacao: number,
    public tpTransacao: string,
    public dtTransacao: string
  ) { }
}