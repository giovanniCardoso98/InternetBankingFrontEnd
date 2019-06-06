import { TokenInterceptor } from './interceptors/token.interceptor';
// Modulos próprios
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';

// Modulos criados --
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Novos componentes > (Certificar que eles estão no declarations)
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ExtratoComponent } from './components/extrato/extrato.component';
import { TransferenciasComponent } from './components/transferencias/transferencias.component';
import { ErrorComponent } from './components/error/error.component';
import { ExtratoTransfComponent } from './components/extrato-transf/extrato-transf.component';

// Services > (Depois daqui, verificar se esta no providers)
import { AuthService } from './services/auth.service';
import { ContaService } from './services/conta.service';
import { ExtratoService } from './services/extrato.service';
import { TransferenciaService } from './services/transferencia.service';
import { UsuarioService } from './services/usuario.service';

// Guards > (Depois daqui, verificar se esta no providers)
import { AuthGuard } from './guards/auth.guard';
import { TrocaPontoVirgulaPipe } from './pipes/troca-ponto-virgula.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ExtratoComponent,
    TransferenciasComponent,
    ErrorComponent,
    ExtratoTransfComponent,
    TrocaPontoVirgulaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    ContaService,
    ExtratoService,
    TransferenciaService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
