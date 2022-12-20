import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Pet } from '../models/Pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor( 
    private http: HttpClient
  ) { }

  private apiUrl: string = environment.apiUrl + '/pet';

  public insertNewPet(objeto: Pet, token: string): Observable<Pet> {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = { headers: header };

    return this.http.post<Pet>(this.apiUrl + '/register', objeto, requestOptions);
  }

  public savePhoto(photo: any, idPet: string, token: string): Observable<Pet> {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    let formData = new FormData();
    formData.append('file', photo, photo.name);

    const requestOptions = { headers: header };
    return this.http.post<Pet>(this.apiUrl + '/save-photo/' + idPet, formData, requestOptions);
  }

  public selectAllPets(): Observable<Pet> {
    return this.http.get<Pet>(this.apiUrl + '/');
  }
}