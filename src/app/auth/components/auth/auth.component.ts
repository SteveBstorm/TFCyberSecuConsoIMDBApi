import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  isTokenOk! : boolean
  constructor(private _authService : AuthService) {
    // let token = localStorage.getItem("token")
    // this.isTokenOk = token == null

    _authService.isConnectedSubject.subscribe({
      next : (data : boolean) => this.isTokenOk = data
    })
  }

}
