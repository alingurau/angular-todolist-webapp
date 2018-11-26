import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private token;

    constructor(
        private http: HttpClient
        ) { }

    getToken() {
        return this.token;
    }

    setToken(token) {
        this.token = token;
    }

    login(entity) {
        return this.http.post<any>(`${environment.url}/token`, entity);
    }

    register(entity) {
        return this.http.post<any>(`${environment.url}/user/add`, entity);
            }

    logout() {
        localStorage.removeItem('currentUser');
    }

    loginTest() {
        return this.http.get(`${environment.url}/token`);
    }
}
