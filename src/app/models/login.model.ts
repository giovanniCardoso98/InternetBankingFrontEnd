export interface ILogin {
  cpf: string;
  senha: string;
}

export class Login implements ILogin {
  constructor(
    public cpf: string,
    public senha: string,
  ) { }

}
