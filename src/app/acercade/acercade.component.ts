import { Component } from '@angular/core';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent {
// nombre = 'acercade';

// Inicializar variables de instancia para almacenar los datos con los que trata el Servicio  
  nombre: string = '';
  apellido: string = '';
  acercademi: string = '';
  frase: string = ''

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
  private datosService: DatosService) { }

// acá va el SERVICIO (ej. persona.Service: Persona.Service)

  ngOnInit(): void {    
    //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio?
    this.datosService.getDatos().subscribe(datos => {
      console.log(datos);
        this.nombre=datos.nombre
        this.apellido=datos.apellido;
        this.acercademi=datos.acercademi;
        this.frase=datos.frase
    });
  }
}