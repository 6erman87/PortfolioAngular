import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectosService } from '../services/proyectos.service';
import { Proyectos } from '../model/proyectos';


@Component({
  selector: 'app-nuevoproyecto',
  templateUrl: './nuevoproyecto.component.html',
  styleUrls: ['./nuevoproyecto.component.css']
})
export class NuevoproyectoComponent implements OnInit {
  nombreP: string = '';
  descripcionP: string = '';
  fechaP: string = '';
  linkP: string = '';

  constructor(private sProyecto: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }


  onCreate(): void {
    const proyec = new Proyectos(this.nombreP, this.descripcionP,
      this.fechaP, this.linkP);
    this.sProyecto.save(proyec).subscribe(
      {
        next: data => {
          alert("Proyecto añadido correctamente");
          this.router.navigate(['']);
        },
        error: err => {
          alert("Falló al añadir el proyecto");
          this.router.navigate(['']);
        }
      });
  }
}