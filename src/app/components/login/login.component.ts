import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from 'src/app/models/user.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  hide = true;
  public user : User;
  constructor(private loginService: LoginService) { 
    this.user = new User();
  }

  ngOnInit(): void {
  }
  
  validateLogin() {
    if(this.user.Login && this.user.Senha) {
      this.loginService.validateLogin(this.user).subscribe(result => {
      console.log('result is ', result);
    }, error => {
      console.log('error is ', error);
    });
    } else {
      alert('Digite o Login e Senha');
    }
  }

}
