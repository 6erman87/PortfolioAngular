import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyectos[] = [];

  constructor(private proyectosService: ProyectosService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void {
    this.proyectosService.list().subscribe(
      {
        next: data => {
          this.proyectos = data
        }
      });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.proyectosService.delete(id).subscribe(
        {
          next: data => {
            this.cargarProyecto()
          },
          error: err => {
            alert("No se pudo eliminar");
          }
        });
    }
  }
} 