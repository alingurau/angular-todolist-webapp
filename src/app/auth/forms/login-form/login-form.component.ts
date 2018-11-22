import { Component, OnInit } from '@angular/core';
import { LoginEntity } from '../../form-entities/login-entity';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  public entity = new LoginEntity();

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.entity.username, this.entity.password).subscribe(
      (token) => console.log(token)
    );
    console.log(this.entity);
  }

}
