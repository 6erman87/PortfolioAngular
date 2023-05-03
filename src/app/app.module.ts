import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RedesComponent } from './redes/redes.component';
import { BannerComponent } from './banner/banner.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { ButtonloginComponent } from './buttonlogin/buttonlogin.component';
import { NavbardashComponent } from './navbardash/navbardash.component';
import { FormsModule } from '@angular/forms';
import { ButtonlogoutComponent } from './buttonlogout/buttonlogout.component';
import { FooterComponent } from './footer/footer.component';
import { NewExperienciaComponent } from './experiencia/new-experiencia.component';
import { LoginComponent } from './modals/login/login.component';
import { SkillsComponent } from './skills/skills.component';
import { EditExperienciaComponent } from './experiencia/edit-experiencia.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { NeweducacionComponent } from './educacion/neweducacion.component';
import { EditeducacionComponent } from './educacion/editeducacion.component';


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
    NavbardashComponent,
    RedesComponent,
    SkillsComponent,
    FooterComponent,
    ExperienciaComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EducacionComponent,
    NeweducacionComponent,
    EditeducacionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // providers: [
  //   interceptorProvider
  // ],

  bootstrap: [AppComponent]
})
export class AppModule { }
