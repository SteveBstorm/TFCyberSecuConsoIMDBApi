import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss'
})
export class ProfilComponent {

  currentUser! : User

  constructor(private _authService : AuthService){
    _authService.getProfil().subscribe({
      next : (data : User) => this.currentUser = data,
      error : (error) => console.log(error.message)
    })
  }
}
