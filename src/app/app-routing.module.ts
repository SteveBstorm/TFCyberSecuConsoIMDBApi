import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { ProfilComponent } from './auth/components/profil/profil.component';
import { isauthGuard } from './shared/guards/isauth.guard';
import { isnotauthGuard } from './shared/guards/isnotauth.guard';
import { ErrorComponent } from './shared/components/error/error.component';

const routes: Routes = [
  {path : '', redirectTo : 'profil', pathMatch : 'full'},
  {path : 'login', canActivate : [isnotauthGuard], component : LoginComponent},
  {path : 'register', canActivate : [isnotauthGuard], component : RegisterComponent},
  {path : 'profil', canActivate : [isauthGuard], component : ProfilComponent},
  {path : '404', component : ErrorComponent},
  {path : '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
