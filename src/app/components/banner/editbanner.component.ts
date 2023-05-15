import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/services/image.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-editbanner',
  templateUrl: './editbanner.component.html',
  styleUrls: ['./editbanner.component.css']
})
export class EditbannerComponent implements OnInit {
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
    this.persona.banner = this.imageService.url;
    this.personaService.update(id, this.persona).subscribe(
      {
        next: data => {
          this.router.navigate([''])
        },
        error: err => {
          alert("Error al modificar banner");
          window.location.reload();
        }
      });
  }

  uploadBanner($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "banner_" + id;
    this.imageService.uploadBanner($event, name)
  }
}
