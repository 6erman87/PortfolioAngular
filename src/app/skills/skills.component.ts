import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';
import { SkillService } from '../services/skill.service';
import { Skill } from '../model/skill';
// import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  // inicializar variables de instancia
  skill: Skill[] = [];

  // id: string = '';
  // habilidad: string = '';
  // porcentaje: string = '';
  // color: string = '';

  constructor(private skillS: SkillService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void{
    this.skillS.lista().subscribe(
      data => {
        this.skill = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.skillS.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar la skill");
        }
      )
    }
  }
}
