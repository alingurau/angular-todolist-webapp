import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../components/login/pages/login/user-login';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
    providedIn: 'root'
})

export class UserService {

    private userUrl = 'localhost:8080/user/users';

    constructor(
        private http: HttpClient) { }

    addUser(user: User): Observable<User> {
        return this.http.post<User>(this.userUrl, user, httpOptions);

    }

}
