import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { config } from 'process';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    apiUrl: 'localhost:8080';

    constructor(
        private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${config.apiUrl}/users`);

    }

}
