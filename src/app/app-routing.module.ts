import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AeroComponent } from './aero/aero.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"login", component:LoginComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"aero", component:AeroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const myRoutings =[
                   LoginComponent,
                   DashboardComponent,
                   AeroComponent
]
