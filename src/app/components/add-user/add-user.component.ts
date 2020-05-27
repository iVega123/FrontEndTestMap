import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  user = {
    Login: '',
    Senha: '',
    Favoritos: [{}]
  };
  submitted = false;

  constructor(private userservice: UserService) { }

  ngOnInit() {
  }

  saveUser() {
    const data = {
      Login: this.user.Login,
      Senha: this.user.Senha,
      Favoritos: this.user.Favoritos
    };

    this.userservice.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newUser() {
    this.submitted = false;
    this.user = {
      Login: '',
      Senha: '',
      Favoritos: [{}]
    };
  }
}
