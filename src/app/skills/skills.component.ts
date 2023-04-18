import { Component } from '@angular/core';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  // inicializar variables de instancia
skills: any=[];

  // id: string = '';
  // habilidad: string = '';
  // porcentaje: string = '';
  // color: string = '';

    constructor(
      //Inyectar el Servicio para tener acceso en la clase a los Métodos
  private datosService: DatosService) { }

    ngOnInit(): void {
      //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio
      this.datosService.getDatos().subscribe(datos => {
        // console.log(datos);
        // Definir la información a mostrar
          this.skills=datos.skills;
      });
    }
  }
