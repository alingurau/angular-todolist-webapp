import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { config } from 'rxjs/internal/config';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    url = 'localhost:8080';

    constructor(private http: HttpClient) { }

    // login(username: string, password: string) {
    //     return this.http.post<any>(`${config.url}/users/authenticate`, { username, password })
    //         .pipe(map(user => {
    //             if (user && user.token) {
    //                 localStorage.setItem('currentUser', JSON.stringify(user));
    //             }
    //             return user;
    //         }));
    // }
    // logout() {
    //     localStorage.removeItem('currentUser');
    // }
}
