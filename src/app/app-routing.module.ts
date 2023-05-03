import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './modals/login/login.component';
import { NewExperienciaComponent } from './experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './educacion/neweducacion.component';
import { EditeducacionComponent } from './educacion/editeducacion.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: IndexComponent }, 
  { path: 'index', component: IndexComponent }, 
  { path: '', redirectTo: '/index', pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'nuevaedu', component: NeweducacionComponent },
  { path: 'editedu/:id', component: EditeducacionComponent },
  { path: '**', component:ErrorComponent }
];

@NgModule({
  declarations: [],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// const routes: Routes = [
//   { path: 'index', component: IndexComponent }, 
//   { path: 'dashboard', component: DashboardComponent },
//   { path: '', redirectTo: '/index', pathMatch:'full' },
//   { path: '**', component:ErrorComponent }
// ];
