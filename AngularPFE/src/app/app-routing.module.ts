import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPaswordComponent } from './forget-pasword/forget-pasword.component';
import { HomeComponent } from './home/home.component';
import { ConducterlistComponent } from './conducterlist/conducterlist.component';
import { AddconduterComponent } from './addconduter/addconduter.component';
import { UpdateconducterComponent } from './updateconducter/updateconducter.component';
import { ListvoiturComponent } from './listvoitur/listvoitur.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdatevoitureComponent } from './updatevoiture/updatevoiture.component';
import { AddvoitureComponent } from './addvoiture/addvoiture.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"forget-pasword",component:ForgetPaswordComponent},
  {path:"",component:HomeComponent},
  {path:"conducterlist",component:ConducterlistComponent},
  {path:"addconduter",component:AddconduterComponent},
  {path:"updateconducter/:id",component:UpdateconducterComponent},
  {path:"listvoitur",component:ListvoiturComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"updatevoiture/:id",component:UpdatevoitureComponent},
  {path:"addvoiture",component:AddvoitureComponent},
  {path:"page",component:PageComponent}




  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
