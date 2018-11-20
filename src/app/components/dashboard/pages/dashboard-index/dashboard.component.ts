import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: User[] = [];
  constructor(private userService: UserService) { }


  ngOnInit() {
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }

}
