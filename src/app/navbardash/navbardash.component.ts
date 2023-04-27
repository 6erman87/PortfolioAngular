
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from '../model/login-usuario';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-navbardash',
  templateUrl: './navbardash.component.html',
  styleUrls: ['./navbardash.component.css']
})

export class NavbardashComponent implements OnInit {
  isLogged = false;
  isLoginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  login() {
    this.router.navigate(['/login'])
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      {
        next: data => {
          this.isLogged = true;
          this.isLoginFail = false;
          this.tokenService.setToken(data.token);
          this.tokenService.setUserName(data.nombreUsuario);
          this.tokenService.setAuthorities(data.authorities);
          this.roles = data.authorities;
          this.router.navigate(['']);
        },
        error: err => {
          this.isLogged = false;
          this.isLoginFail = true;
          this.errMsj = err.error.mensaje;
          console.log(this.errMsj);
        }
      });
  }

  onLogOut(): void {
    this.tokenService.logout();
    window.location.reload();
  }

}  