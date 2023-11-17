import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGarageComponent } from './add-garage/add-garage.component';
import { UpdateGarageComponent } from './update-garage/update-garage.component';
import { GettAllGarageComponent } from './gett-all-garage/gett-all-garage.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  {path :'',redirectTo:'/login',pathMatch:'full'},
  {path:"garages", component:GettAllGarageComponent},
  {path:"Accueil", component:AccueilComponent},
  {path :"ajoute-garage", component:AddGarageComponent},
  {path :"update-garages/:idGarage" , component:UpdateGarageComponent},
  {path :"login", component:LoginComponent},
  {path: "**", component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
