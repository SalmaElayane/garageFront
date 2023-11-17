import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GettAllGarageComponent } from './gett-all-garage/gett-all-garage.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { AddGarageComponent } from './add-garage/add-garage.component';
import { UpdateGarageComponent } from './update-garage/update-garage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { Error404Component } from './error404/error404.component';
import { HttpTokenInterceptor } from './token-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    GettAllGarageComponent,
    NavbarComponent,
    AddGarageComponent,
    UpdateGarageComponent,
    AccueilComponent,
    LoginComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
