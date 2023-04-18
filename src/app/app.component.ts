import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'PortfolioAngular';
}

/* Controlador para un formulario de inicio de sesión

import { Component, OnInit } from '@angular/core';
// importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup } from '@angular/forms*;
@Component({
  selector: 'app-login',
  templateUrl: ./login.component.html',
  styleUrls:
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder){
    ////rraamos el grupo de controles para el formulario de login
    this. form= this. formBuilder.group({
      password:["*,[]],
      mail:[", []]
  ngOnInit() {}
*/

/* template para un formulario de inicio de sesión asociado al controlador anterior

<form [formGroup]="form" >
<div>
<label for="email">Email: </label>
<input type="email" formControlName="mail">
</div>
<br/>
<div>
<label for="exampleInputPassword1" class="form-label">Password: </label>
<input type="password" formControlName="password">
</div>
<br/>
<div>
<button type="submit">Iniciar Sesién</button>
</div>
</form>
*/

