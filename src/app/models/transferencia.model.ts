export interface ITranferencia {
  contaOrigem: number;
  agenciaOrigem: number;
  contaDestino: number;
  agenciaDestino: number;
  valor: number;
  observacao: string;
}

export class Transferencia implements ITranferencia {
  constructor(
    public contaOrigem: number,
    public agenciaOrigem: number,
    public contaDestino: number,
    public agenciaDestino: number,
    public valor: number,
    public observacao: string,
  ) { }

}
