import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  form: FormGroup;
  nombreUsuario: string = '';
  password: string = '';


  // Acá esto no va en MasterClass 8
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  // nombreUsuario!: string;
  // password! : string;
  roles: string[] = [];
  errMsj!: string;

  constructor(private tokenService: TokenService,
              private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder
              ) { 
                this.form=this.formBuilder.group(
                  {
                    nombreUsuario:['',[Validators.required, Validators.minLength(5)]],
                    password:['',[Validators.required, Validators.minLength(5)]],
                  }
                )
              }


  get NombreUsuario() 
  {
    return this.form.get("nombreUsuario");
  }

  get Password() 
  {
    return this.form.get("password");
  }

  // onEnviar(event:Event)
  // {
  //   event.preventDefault;
  //   this.authService.IniciarSesion(this.form.value).subscribe(data=>{
  //     console.log("DATA:" + JSON.stringify(data));
  //     this.router.navigate(['']);
  //   })
  // }          

  // Acá esto no va en MasterClass 8
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  // Acá esto no va en MasterClass 8
  onLogin(): void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
    this.authService.login(this.loginUsuario).subscribe(
      {
        next: data =>{
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;        
        this.router.navigate(['']);
      }, 
      error: err =>{
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        alert("ERROR: Falló el inicio de sesión");
        window.location.reload();
      }
    })
  }


}
  


