import { Component, OnInit } from '@angular/core';
import { TransferenciaService} from '../../services/transferencia.service'

@Component({
  selector: 'app-extrato-transf',
  templateUrl: './extrato-transf.component.html',
  styleUrls: ['./extrato-transf.component.scss']
})
export class ExtratoTransfComponent implements OnInit {

  constructor(private transf: TransferenciaService) { }

  ngOnInit() {
  }

  // pegaTransf(){

  //   this.transf.transferir(this.pegaTransf)
  //     .subscribe(
  //     res => 

  //     },
  //     err => console.log(err)
  //     )
  // }



}
