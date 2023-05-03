import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  isLogged = false;
  isLoginFail = false;
  loginUsuario!: LoginUsuario; // ES UN OBJETO DE LA CLASE LoginUsuario (login-usuario.ts)
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;
  loginForm: any;

  constructor(
    private tokenService: TokenService, 
    private authService: AuthService, 
    private router: Router
    ){ }

// PARA SABER SI ESTAMOS LOGUEADOS
    ngOnInit(): void {
    if (this.tokenService.getToken()
    ){
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  login(){ 
  let loginUsuario:LoginUsuario={
  // nombreUsuario: this.loginForm.value.email,
  nombreUsuario: this.nombreUsuario,
  password: this.password
  }
  this.authService.login(loginUsuario)
  //agregué 02.05.23 19:20 hs
  // this.router.navigate(['/dashboard'])
}


  // login(){
  //   this.router.navigate(['/dashboard'])
  // }

  
// INICIALIZA EL loginUsuario mediante el Constructor de login-usuario.ts
  onLogin(): void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.isLogged = true;
        this.isLoginFail = false;

        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate([''])
      }, err =>{
        this.isLogged = false;
        this.isLoginFail = true;
        this.errMsj = err.error.mensaje; //MENSAJE DEL AuthController.java (PostMapping login)
        console.log(this.errMsj); 
      })
  }


  // INICIALIZA EL loginUsuario mediante el Constructor de login-usuario.ts
  // onLogin(): void{
  //   this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
  //   this.authService.login(this.loginUsuario).subscribe(
  //     {
  //       next: (data: { token: string; nombreUsuario: string; authorities: string[]; }) => {
  //         this.isLogged = true;
  //         this.isLoginFail = false;
  //         this.tokenService.setToken(data.token);
  //         this.tokenService.setUserName(data.nombreUsuario);
  //         this.tokenService.setAuthorities(data.authorities);
  //         this.roles = data.authorities;
  //         this.router.navigate(['dashboard']);
  //         },
  //         error: (err: { error: { mensaje: string; }; }) => {
  //           this.isLogged = false;
  //           this.isLoginFail = true;
  //           this.errMsj = err.error.mensaje;
  //           console.log(this.errMsj);
  //         }
  //       });
  //     }
    }
  

  // onLogOut(): void {
  //   this.tokenService.logout();
  //   window.location.reload();  
  // }

// }  
