import { Component, OnInit } from '@angular/core';
import { User } from './user-login';

@Component({
  selector: 'app-auth-index',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {


  model = new User(1, 'dummyuser', 'user');

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit() {
  }

}
