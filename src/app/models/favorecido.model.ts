export class IFavorecido {
  nome: string;
  banco: number;
  agencia: number;
  conta: number;
  cpf: string
}

export class Favorecido implements IFavorecido {
  constructor(
    public nome: string,
    public banco: number,
    public agencia: number,
    public conta: number,
    public cpf: string
  ) { }
}