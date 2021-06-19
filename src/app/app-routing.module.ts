import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import { PatientsComponent } from '../components/patients/patients.component';
import { RegisterPatientComponent } from '../components/register-patient/register-patient.component';

import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},

  { path: 'login', component: LoginComponent},

  { path: 'dashboard', 
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: PatientsComponent },
      { path: 'add', component: RegisterPatientComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Components = [LoginComponent, HomeComponent, PatientsComponent, RegisterPatientComponent];