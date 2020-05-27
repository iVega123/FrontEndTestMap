import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.models';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  validateLogin(user: User){
    return this.http.post('localhost:8080/api/users',{
        username : user.Login,
        password : user.Senha
    })
}
}
