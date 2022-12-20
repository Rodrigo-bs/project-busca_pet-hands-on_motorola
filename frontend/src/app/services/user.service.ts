import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';
import { Pet } from '../models/Pet';

type NewType = Observable<object>;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  insertNewUser(registro: User) { 
    
  return this.http.post<User>(this.apiUrl + '/register', registro);
  }

  constructor(
    private http: HttpClient
  ) { }

  public apiUrl: string = environment.apiUrl + '/user';

  public getMyPets(idUser: string, token: string): Observable<object> {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = { headers: header };

    return this.http.get(`${this.apiUrl}/my-pets/${idUser}`, requestOptions);
  }

  public insertNewAd(objeto: User, token: string): Observable<User> {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = { headers: header };

    return this.http.post<User>(this.apiUrl + '/create', objeto, requestOptions);
  }
  

  public getMyUsers(idUser: string, token: string): Observable<object> {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = { headers: header };

    return this.http.get(`${this.apiUrl}/my-users/${idUser}`, requestOptions);
  }

  public getPedingPet(idUser: string, token: string): Observable<Object> {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = { headers: header };
    return this.http.get(`${this.apiUrl}/peding-pet/${idUser}`, requestOptions);
  }

  public getPedingAd(idUser: string, token: string): Observable<Object> {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = { headers: header };
    return this.http.get(`${this.apiUrl}/peding-ad/${idUser}`, requestOptions);
  }
  
  public getMyUser(idUser: string, token: string): Observable<object> {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = { headers: header };

    return this.http.get(`${this.apiUrl}/${idUser}`, requestOptions);
  }

  
}
