import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})

export class UserService {

    private usersUrl: 'localhost:8080/rest/user/users';

    constructor(
        private http: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.usersUrl);
    }


}
