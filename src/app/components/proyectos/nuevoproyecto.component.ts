import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';



@Component({
  selector: 'app-nuevoproyecto',
  templateUrl: './nuevoproyecto.component.html',
  styleUrls: ['./nuevoproyecto.component.css']
})
export class NuevoproyectoComponent implements OnInit {
  form: FormGroup;
  nombreP: string = '';
  descripcionP: string = '';
  fechaP: string = '';
  linkP: string = '';

  constructor(
    private sProyecto: ProyectosService,
    private router: Router,
    private formBuilder: FormBuilder
    )
     {
      this.form = this.formBuilder.group({
        nombreP: ['', [Validators.required]],
        descripcionP: ['', [Validators.required]],
        fechaP: ['', [Validators.required]],
        linkP: [''],
      })
      }

  ngOnInit(): void {
  }

  get NombreP() {
    return this.form.get("nombreP");
  }

  get DescripcionP() {
    return this.form.get("descripcionP");
  }

  get FechaP() {
    return this.form.get("fechaP");
  }

  get LinkP() {
    return this.form.get("linkP");
  }

  onCreate(): void {
    const proyec = new Proyectos(
      this.nombreP,
      this.descripcionP,
      this.fechaP,
      this.linkP
      );
    this.sProyecto.save(proyec).subscribe(
      {
        next: data => {
          alert("Proyecto añadido correctamente");
          this.router.navigate(['']);
        },
        error: err => {
          alert("Falló la carga, intente nuevamente");
          window.location.reload();
        }
      });
  }

  limpiar(): void {
    this.form.reset();
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onCreate();
    } else{
      alert("falló la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }
  
}