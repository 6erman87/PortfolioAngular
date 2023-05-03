import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  authURL = 'http://localhost:8080/auth/';
  // isLogged = false;
  // isLoginFail = false;
  // loginUsuario: LoginUsuario; // ES UN OBJETO DE LA CLASE LoginUsuario (login-usuario.ts)
  // nombreUsuario: string;
  // password: string;
  // roles: string[] = [];
  // errMsj!: string;

  constructor(
    private httpClient: HttpClient
    // private tokenService: TokenService, 
    // private authService: AuthService,
    // private router: Router    
    ) { }

// com.porfolio.BackEnd.security.Controller
// AuthController.java

// ngOnInit(): void {
//   if (this.tokenService.getToken()) {
//     this.isLogged = true;
//     this.isLoginFail = false;
//     this.roles = this.tokenService.getAuthorities();
//   }
// }


  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);
  }

  // public login(loginUsuario: LoginUsuario){
  //   this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
  //   return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario,
  //   { responseType:'json' }).subscribe((resp) => {
  //     localStorage.setItem('auth_token', resp.token);
  //     console.log(localStorage.getItem('auth_token'));
  //     this.usuarioAcceso().subscribe((resp: string) => {
  //     if (resp == 'OK') {
  //     this.router.navigate(['admin'])
  //     }
  //   });
  //   });
  // }
}



//   login(loginUsuario: LoginUsuario) {
//     return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario,
//     { responseType:'json' }).subscribe((resp) => {
//       localStorage.setItem('auth_token', resp.token);
//       console.log(localStorage.getItem('auth_token'));
//       this.usuarioAcceso().subscribe((resp: string) => {
//       if (resp == 'OK') {
//       this.router.navigate(['admin'])
//       }
//     });
//   });
// }


 
//     this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario, { responseType: 'json' })
//     .subscribe((resp: any) => {
//     localStorage.setItem('auth_token', resp.token);
//     console.log(localStorage.getItem('auth_token'));
//     this.usuarioAcceso().subscribe((resp: any) => {
//     if (resp == 'OK') {
//     this.router.navigate(['admin'])
//     }
//   })
// })
// }
// }


//   login(loginUsuario: LoginUsuario) {
//     this.httpClient.post(this.authURL + 'login', loginUsuario, { responseType: 'json' })
//     .subscribe((resp: any) => {
//     localStorage.setItem('auth_token', resp.token);
//     console.log(localStorage.getItem('auth_token'));    
//     this.authService.login(this.loginUsuario).subscribe((resp) => {
//     if (resp == 'OK') {
//     this.router.navigate(['admin']);
//     }
//     });
//     });
 
// }
// }

// 

// Acá hay que escribir mucho más que en COMPONENT
// Los servicios hay que importarlos al Rooting app.module.ts (TS son los archivos de la parte de la lógica)