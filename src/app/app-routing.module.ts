import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EditacercadeComponent } from './components/acercade/editacercade.component';
import { EditproyectoComponent } from './components/proyectos/editproyecto.component';
import { NuevoproyectoComponent } from './components/proyectos/nuevoproyecto.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditbannerComponent } from './components/banner/editbanner.component';


const routes: Routes = [
  { path: '', component: IndexComponent }, 
  { path: 'index', component: IndexComponent }, 
  // { path: '', redirectTo: '/index', pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'nuevaedu', component: NeweducacionComponent },
  { path: 'editedu/:id', component: EditeducacionComponent },
  { path: 'newskill', component: NewSkillComponent },
  { path: 'editskill/:id', component: EditSkillComponent },
  { path: 'nuevoproyec', component: NuevoproyectoComponent},
  { path: 'editproyec/:id', component: EditproyectoComponent },
  { path: 'editacercade/:id', component: EditacercadeComponent },
  { path: 'editbanner/:id', component: EditbannerComponent}
];

@NgModule({
  declarations: [],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }