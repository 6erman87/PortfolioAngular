import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  // URL = environment.URL + 'auth/';
  URL = 'https://backendgnb.onrender.com/auth/';

  constructor(
    private httpClient: HttpClient
    ) {      
     }

    public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
      return this.httpClient.post<any>(this.URL + 'nuevo', nuevoUsuario);
    }
  
    public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
      return this.httpClient.post<JwtDto>(this.URL + 'login', loginUsuario);
    }
  }