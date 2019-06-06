export interface IExtrato {
  id: string;
  vlAtual: number;
  vlAnterior: number;
  observacao: string;
  agenciaRef: number;
  contaRef: number;
  vlTransacao: number;
  tpTransacao: string;
  dtTransacao: string;
}

export class Extrato implements IExtrato {
  constructor(
    public id: string,
    public vlAtual: number,
    public vlAnterior: number,
    public observacao: string,
    public agenciaRef: number,
    public contaRef: number,
    public vlTransacao: number,
    public tpTransacao: string,
    public dtTransacao: string,
  ) { }

}
