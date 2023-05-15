import { Component, OnInit } from '@angular/core';
import { Persona } from '../../model/persona.model';
import { PersonaService } from '../../services/persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';

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
    private router: Router,
    public imageService: ImageService
) {}

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
    this.persona.img = this.imageService.url;
    this.personaService.update(id, this.persona).subscribe(
      {
        next: data => {
          this.router.navigate([''])
        },
        error: err => {
          alert("Error al modificar persona, puede que se deba al excedarse en el límite de caracteres permitidos");
          window.location.reload();
        }
      });
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name)
  }
}
