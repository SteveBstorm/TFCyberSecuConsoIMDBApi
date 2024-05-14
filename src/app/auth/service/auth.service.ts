import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url : string = "https://localhost:7158/api/Auth/"

  get isConnected() : boolean {
    return localStorage.getItem("token") != null
  }
  isConnectedSubject : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isConnected)

  constructor(
    private _client : HttpClient
  ) { }

  login(email : string, pwd : string)
  {
    this._client.post(this.url + "login",
                      {email : email, password : pwd},
                      {responseType : "text"}
                      //je spécifie à la requête qu'elle attend un string et non un JSON
                    ).subscribe({
      next : (data : string) => {
        localStorage.setItem("token", data)
        this.isConnectedSubject.next(this.isConnected)
        // sessionStorage.setItem("token", JSON.stringify({data : "fait caca sur ton doigt"}))
        // let objet = JSON.parse(sessionStorage.getItem("token") ?? "")
        // console.log(localStorage.getItem("token"))
      }
    })
  }

  register() {}

  getProfil() {
    // let myHeader : HttpHeaders = new HttpHeaders({
    //   "authorization" : "bearer " + localStorage.getItem("token")
    // })
    return this._client.get<User>(this.url/*, {headers : myHeader}*/)
  }
}
