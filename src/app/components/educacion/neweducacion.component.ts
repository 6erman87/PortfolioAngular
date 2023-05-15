import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css'],
})
export class NeweducacionComponent implements OnInit {
  form: FormGroup;
  nombreD: string = '';
  descripcionD: string = '';
  periodoD: string = '';
  imgD: string = '';

  constructor(
    private educacionS: EducacionService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      nombreD: ['', [Validators.required]],
      periodoD: ['', [Validators.required]],
      descripcionD: ['', [Validators.required]],
      imgD: [''],
    });
  }

  ngOnInit(): void {}

  get NombreD() {
    return this.form.get('nombreD');
  }

  get DescripcionD() {
    return this.form.get('descripcionD');
  }

  get PeriodoD() {
    return this.form.get('periodoD');
  }

  onCreate(): void {
    const edu = new Educacion(
      this.nombreD,
      this.descripcionD,
      this.periodoD,
      this.imgD
    );
    this.educacionS.save(edu).subscribe({
      next: (data) => {
        alert('Educación añadida correctamente');
        this.router.navigate(['']);
      },
      error: (err) => {
        alert('Falló la carga, intente nuevamente');
        window.location.reload();
      },
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
      alert('falló la carga, intente nuevamente');
      this.form.markAllAsTouched();
    }
  }
}
