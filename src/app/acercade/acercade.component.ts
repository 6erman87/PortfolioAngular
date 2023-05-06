import { Component, OnInit } from '@angular/core';

// import { DatosService } from '../services/datos.service';

import { Persona } from '../model/persona.model';
import { TokenService } from '../services/token.service';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
// nombre = 'acercade';
  persona: Persona = null;

// acá va el SERVICIO (ej. persona.Service: Persona.Service)
  constructor(    
    public personaService: PersonaService,
    private tokenService: TokenService
    ) { }

    isLogged = false;

  
  ngOnInit(): void {
    this.cargarPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  
  cargarPersona(): void {
    this.personaService.detail(1).subscribe(data =>
      {this.persona = data}
    )
  }
}

// Inicializar variables de instancia para almacenar los datos con los que trata el Servicio  

  // comentado el 20.04.2023 video PROYECTO FINAL Parte 13
  // nombre: string = '';
  // apellido: string = '';
  // acercademi: string = '';
  // frase: string = ''


  // comentado el 20.04.2023 video PROYECTO FINAL Parte 13
  // constructor(
  //   //Inyectar el Servicio para tener acceso en la clase a los Métodos
  // private datosService: DatosService) { }

  // comentado el 20.04.2023 video PROYECTO FINAL Parte 13
  // ngOnInit(): void {   

  //   Esto es almacenar en la variable de instancia los datos recuperados por el Servicio?

  //   this.datosService.getDatos().subscribe(datos => {
  //     console.log(datos);
  //       this.nombre=datos.nombre
  //       this.apellido=datos.apellido;
  //       this.acercademi=datos.acercademi;
  //       this.frase=datos.frase
