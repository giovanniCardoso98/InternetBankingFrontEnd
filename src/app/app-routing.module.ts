import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ExtratoComponent } from './components/extrato/extrato.component';
import { TransferenciasComponent } from './components/transferencias/transferencias.component';
import { AuthGuard } from './guards/auth.guard';
import { ErrorComponent } from './components/error/error.component';
import { ExtratoTransfComponent} from './components/extrato-transf/extrato-transf.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'extrato',
    component: ExtratoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'transferencias',
    component: TransferenciasComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'extratoTransf',
    component: ExtratoTransfComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: '**', redirectTo: 'error'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
