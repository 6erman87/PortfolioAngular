import { Component, OnInit } from '@angular/core';
import { Persona } from '../model/persona.model';
import { PersonaService } from '../services/persona.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editacercade',
  templateUrl: './editacercade.component.html',
  styleUrls: ['./editacercade.component.css']
})
export class EditacercadeComponent implements OnInit {
  persona: Persona = null;

  constructor(
    private activatedRouter: ActivatedRoute,
    private personaService: PersonaService,
    private router: Router) {}

  ngOnInit(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      {
        next: data => {
          this.persona = data;
        },
        error: err => {
          alert("Error al modificar experiencia");
          this.router.navigate(['']);
        }
      })
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe(
      {
        next: data => {
          this.router.navigate([''])
        },
        error: err => {
          alert("Error al modificar persona");
          this.router.navigate(['']);
        }
      });
  }

  uploadImage($event:any){

  }

}
