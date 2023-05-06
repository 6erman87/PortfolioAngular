import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { BannerComponent } from './banner/banner.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { ButtonloginComponent } from './buttonlogin/buttonlogin.component';
// import { NavbardashComponent } from './navbardash/navbardash.component';
import { FormsModule } from '@angular/forms';
import { ButtonlogoutComponent } from './buttonlogout/buttonlogout.component';
import { FooterComponent } from './footer/footer.component';
import { NewExperienciaComponent } from './experiencia/new-experiencia.component';
// import { LoginComponent } from './modals/login/login.component';
import { EditExperienciaComponent } from './experiencia/edit-experiencia.component';

import { EducacionComponent } from './educacion/educacion.component';
import { NeweducacionComponent } from './educacion/neweducacion.component';
import { EditeducacionComponent } from './educacion/editeducacion.component';
import { LoginComponent } from './login/login.component';
import { RedesComponent } from './redes/redes.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './skills/skills.component';
import { EditSkillComponent } from './skills/edit-skill.component';
import { NewSkillComponent } from './skills/new-skill.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

import { NuevoproyectoComponent } from './proyectos/nuevoproyecto.component';
import { EditproyectoComponent } from './proyectos/editproyecto.component';
import { EditacercadeComponent } from './acercade/editacercade.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';



@NgModule({
  declarations: [
    AppComponent,
    AcercadeComponent,
    BannerComponent,
    ButtonloginComponent,
    ButtonlogoutComponent,
    DashboardComponent,
    ErrorComponent,
    IndexComponent,
    LoginComponent,
    NavbarComponent,
    // NavbardashComponent,
    RedesComponent,
    SkillsComponent,
    FooterComponent,
    NewExperienciaComponent,
    ExperienciaComponent,
    EditExperienciaComponent,
    EducacionComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    ProyectosComponent,
    EditproyectoComponent,
    NuevoproyectoComponent,
    EditacercadeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())

  ],
  // providers: [
  //   interceptorProvider
  // ],

  bootstrap: [AppComponent]
})
export class AppModule { }
