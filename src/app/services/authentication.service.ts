import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    url = 'localhost:8080';

    constructor(private http: HttpClient) { }

    getToken() {
        return this.http.get(this.url + '/token');
    }
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
