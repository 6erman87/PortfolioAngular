import { Component, OnInit } from '@angular/core';import { FormBuilder, FormGroup } from '@angular/forms';
;
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  form: FormGroup;
  skill: Skill = null;

  constructor(
    private skillS: SkillService,
    private activatedRouter: ActivatedRoute,    
    private router: Router
    ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.detail(id).subscribe(
      {
        next: data => {
          this.skill = data;
        },
        error: err => {
          alert("Error al modificar habilidad");
          this.router.navigate(['']);
        }
      })
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.update(id, this.skill).subscribe(
      {
        next: data => {
          this.router.navigate([''])
        },
        error: err => {
          alert("Error: Debes añadir una habilidad y su nivel de aprendizaje en una escala de 0 a 100 %");
          this.form.reset();
        }
      });
  }
}