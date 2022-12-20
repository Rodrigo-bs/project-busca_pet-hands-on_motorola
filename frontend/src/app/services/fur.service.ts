import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Fur } from '../models/Fur';

@Injectable({
  providedIn: 'root'
})
export class FurService {

  constructor(
    private http: HttpClient
  ) { }

  private apiUrl: string = environment.apiUrl + '/fur';

  public selectAllFurs(): Observable<Fur> {
    return this.http.get<Fur>(this.apiUrl + '/');
  }
}
