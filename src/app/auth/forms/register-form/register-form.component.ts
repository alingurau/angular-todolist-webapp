import { Component, OnInit } from '@angular/core';
import { RegisterEntity } from '../../form-entities/register-entity';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  public entity = new RegisterEntity();

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.entity.firstName, this.entity.lastName, this.entity.email, this.entity.password ).subscribe(
      (user) => console.log(user)
    );
    console.log(this.entity);
  }

}
