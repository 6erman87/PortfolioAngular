import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../services/proyectos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from '../model/proyectos';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit {
  proyectos: Proyectos = null;

  constructor(
    private sProyecto: ProyectosService, 
    private activatedRouter : ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.detail(id).subscribe(
      {
        next: data =>{
          this.proyectos = data;
      }, 
        error: err =>{
          alert("Error al modificar");
          this.router.navigate(['']);
        }
     });
  }


  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.update(id, this.proyectos).subscribe(
      {
        next: data => {
          this.router.navigate(['']);
      }, 
        error: err => {
          alert("Error al modificar el proyecto");
          this.router.navigate(['']);
        }
      });
    }
}
