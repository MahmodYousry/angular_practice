import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    NotFoundComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
