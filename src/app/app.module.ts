import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { ProfilComponent } from './auth/components/profil/profil.component';
import { AuthComponent } from './auth/components/auth/auth.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { TieInterceptor } from './shared/services/tie.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfilComponent,
    AuthComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS, useClass : TieInterceptor, multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
