import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: "full"},
  {path: 'home', component: HomeComponent, title: 'Home'},
  {path: 'register', component: RegisterComponent, title: 'Signup'},
  {path: 'login', component: LoginComponent, title: 'Login'},

  {path: '**', component: NotFoundComponent, title: 'This page is not found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
