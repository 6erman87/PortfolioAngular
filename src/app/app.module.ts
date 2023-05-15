import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AcercadeComponent } from "./components/acercade/acercade.component";
import { BannerComponent } from "./components/banner/banner.component";
import { ButtonloginComponent } from "./components/buttonlogin/buttonlogin.component";
import { ButtonlogoutComponent } from "./components/buttonlogout/buttonlogout.component";
import { IndexComponent } from "./components/index/index.component";
import { LoginComponent } from "./components/login/login.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RedesComponent } from "./components/redes/redes.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NewExperienciaComponent } from "./components/experiencia/new-experiencia.component";
import { ExperienciaComponent } from "./components/experiencia/experiencia.component";
import { EditExperienciaComponent } from "./components/experiencia/edit-experiencia.component";
import { EducacionComponent } from "./components/educacion/educacion.component";
import { NeweducacionComponent } from "./components/educacion/neweducacion.component";
import { EditeducacionComponent } from "./components/educacion/editeducacion.component";
import { EditSkillComponent } from "./components/skills/edit-skill.component";
import { NewSkillComponent } from "./components/skills/new-skill.component";
import { ProyectosComponent } from "./components/proyectos/proyectos.component";
import { NuevoproyectoComponent } from "./components/proyectos/nuevoproyecto.component";
import { EditacercadeComponent } from "./components/acercade/editacercade.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { EditproyectoComponent } from "./components/proyectos/editproyecto.component";
import { NgCircleProgressModule } from "ng-circle-progress";
import { DatosService } from "./services/datos.service";
import { InterceptorService } from "./services/interceptor.service";
import { AuthService } from "./services/auth.service";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { EditbannerComponent } from "./components/banner/editbanner.component";



@NgModule({
  declarations: [
    AppComponent,
    AcercadeComponent,
    BannerComponent,
    ButtonloginComponent,
    ButtonlogoutComponent,
    IndexComponent,
    LoginComponent,
    NavbarComponent,
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
    EditbannerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],

  providers: [DatosService, AuthService, { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
],

  bootstrap: [AppComponent]
    // interceptorProvider
  ,
})
export class AppModule { }
