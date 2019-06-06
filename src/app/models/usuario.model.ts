export class IUsuario {
  _id: string;
  dsEmail: string;
  nrCPF: string;
  sobrenomeUsuario: string;
  nmUsuario: string;
  __v: number
}

export class Usuario implements IUsuario {
  constructor(
    public _id: string,
    public dsEmail: string,
    public nrCPF: string,
    public sobrenomeUsuario: string,
    public nmUsuario: string,
    public __v: number
  ) { }
}