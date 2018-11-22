import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    getToken() {
        return this.http.get(`${environment.url}/token`);
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.url}/token`, { username, password });
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}
