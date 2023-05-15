import { Component, OnInit } from '@angular/core';

import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';
import { TokenService } from 'src/app/services/token.service';
// import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  // inicializar variables de instancia
  form: FormGroup;
  skill: Skill[] = [];

  constructor(
    private skillS: SkillService,
    private tokenService: TokenService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      skill: [[], [Validators.required]],
    });
  }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.skillS.list().subscribe((data) => {
      this.skill = data;
    });
  }

  delete(id: number) {
    if (id != undefined) {
      this.skillS.delete(id).subscribe({
        next: (data) => {
          this.cargarSkills();
        },
        error: (err) => {
          alert('No se pudo borrar la skill');
        },
      });
    }
  }
}
