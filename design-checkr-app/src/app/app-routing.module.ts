import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'landing', component: LandingComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
