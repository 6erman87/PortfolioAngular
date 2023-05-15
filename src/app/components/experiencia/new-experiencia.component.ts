import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';


@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})

export class NewExperienciaComponent implements OnInit {
  form: FormGroup;
  nombreE: string = '';
  puestoE: string = '';
  periodoE: string = '';
  descripcionE: string = '';
  img: string = '';

  constructor(
    private sExperiencia: SExperienciaService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      nombreE: ['', [Validators.required]],
      puestoE: ['', [Validators.required]],
      periodoE: ['', [Validators.required]],
      descripcionE: ['', [Validators.required]],
      img: [''],
    })
  }

  ngOnInit(): void {
  }

  get NombreE() {
    return this.form.get("nombreE");
  }

  get PuestoE() {
    return this.form.get("puestoE");
  }

  get PeriodoE() {
    return this.form.get("periodoE");
  }

  get DescripcionE() {
    return this.form.get("descripcionE");
  }

  get Img() {
    return this.form.get("img");
  }

  onCreate(): void {
    const expe = new Experiencia(
      this.nombreE,
      this.puestoE,
      this.periodoE,
      this.descripcionE,
      this.img
    );
    this.sExperiencia.save(expe).subscribe(
      {
        next: data => {
          alert("Experiencia añadida correctamente");
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

  onEnviar(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      this.onCreate();
    } else {
      alert("falló la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

}