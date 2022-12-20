import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) {  }

  public login(usuario: object): Observable<object> {
    return this.http.post(environment.apiUrl + environment.loginUri, usuario);
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public validToken(token: string): Observable<object> {
    const body = {
      token: token
    };

    return this.http.post(environment.apiUrl + environment.validTokenUri, body);
  }

  public logout() {
    localStorage.removeItem('userData');
    localStorage.removeItem('token');
    window.location.href=environment.apllicationUrl
  }
}
