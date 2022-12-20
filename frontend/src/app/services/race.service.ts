import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Race } from '../models/Race';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor(
    private http: HttpClient
  ) {  }

  private apiUrl: string = environment.apiUrl + '/race';

  selectAllRaces(): Observable<Race> {
    return this.http.get<Race>(this.apiUrl + '/');
  }
}
