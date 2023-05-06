import { Component, OnInit } from '@angular/core';
import { Skill } from '../model/skill';
import { SkillService } from '../services/skill.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
    skill: Skill = null;
  
    constructor(
      private skillS: SkillService,
      private activatedRouter: ActivatedRoute,
      private router: Router) { }
  
    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.skillS.detail(id).subscribe(
        {
          next: data => {
            this.skill = data;
          },
          error: err => {
            alert("Error al modificar experiencia");
            this.router.navigate(['']);
          }
        })
    }
  
  
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.skillS.update(id, this.skill).subscribe(
        {
          next: data => {
            this.router.navigate([''])
        }, 
        error: err => {
          alert("Error al modificar la skill");
          this.router.navigate(['']);
        }
      });
  }
}