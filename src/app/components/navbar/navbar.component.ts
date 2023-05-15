import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from '../../model/login-usuario';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor() { }

  // ngOnInit(): void {
  //   if (this.tokenService.getToken()) {
  //     this.isLogged = true;
  //     this.isLoginFail = false;
  //     this.roles = this.tokenService.getAuthorities();
  //   }
  // }

  // login() {
  //   this.router.navigate(['/dashboard'])
  // }

  // onLogOut(): void {
  //   this.tokenService.logOut();
  //   window.location.reload();
  // }
}
