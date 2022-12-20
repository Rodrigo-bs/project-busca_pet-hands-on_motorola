import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Ad } from '../models/Ad';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = environment.apiUrl + '/ad';

  insertNewAd(objeto: Ad, token: string): Observable<Ad> {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = { headers: header };

    return this.http.post<Ad>(this.apiUrl + '/create', objeto, requestOptions);
  }

  public savePhoto(photo: any, idAd: string, token: string): Observable<Ad> {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    let formData = new FormData();
    formData.append('file', photo, photo.name);

    const requestOptions = { headers: header };
    return this.http.post<Ad>(this.apiUrl + '/save-photo/' + idAd, formData, requestOptions);
  }
}
