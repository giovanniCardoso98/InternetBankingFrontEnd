import { Component, OnInit } from '@angular/core';
import { AuthService } from '../app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private authService: AuthService) { }

  isLogado(): boolean {
    if (this.authService.usuarioEstaLogado()) {
      return true;
    } else {
      return false;
    }

  }

}
