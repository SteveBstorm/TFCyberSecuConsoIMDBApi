import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email! : string
  pwd! : string

  constructor(private _authService : AuthService){}

  login(){
    this._authService.login(this.email, this.pwd)
  }
}
