import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SkillService } from 'src/app/services/skill.service';
import { Skill } from 'src/app/model/skill';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css'],
})
export class NewSkillComponent implements OnInit {
  form: FormGroup;
  nombre: '';
  porcentaje: 0;

  constructor(
    private formBuilder: FormBuilder,
    private skillS: SkillService,
    private router: Router
  ) {
    //Creación del grupo de controles para el formulario
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      porcentaje: [
        '',
        [Validators.required, Validators.min(0), Validators.max(100)],
      ],
    });
  }

  ngOnInit(): void {}

  get Nombre() {
    return this.form.get('nombre');
  }

  get Porcentaje() {
    return this.form.get('porcentaje');
  }

  onCreate(): void {
    const nombr = new Skill(this.nombre, this.porcentaje);
    this.skillS.save(nombr).subscribe({
      next: (data) => {
        alert('Habilidad añadida');
        this.router.navigate(['']);
      },
      error: (err) => {
        alert('Falló la carga, intente nuevamente');
        this.form.reset();
      },
    });
  }

  limpiar(): void {
    this.form.reset();
  }
}
