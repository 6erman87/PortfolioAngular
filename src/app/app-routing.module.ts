import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { LoginComponent } from './modals/login/login.component';

const routes: Routes = [
  { path: '', component: IndexComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component:ErrorComponent }
];

@NgModule({
  declarations: [],
  // imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// const routes: Routes = [
//   { path: 'index', component: IndexComponent }, 
//   { path: 'dashboard', component: DashboardComponent },
//   { path: '', redirectTo: '/index', pathMatch:'full' },
//   { path: '**', component:ErrorComponent }
// ];
