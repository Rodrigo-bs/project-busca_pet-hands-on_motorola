import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pet } from '../models/Pet';

@Injectable({
  providedIn: 'root'
})
export class PetFeedService {

  constructor(
    private http: HttpClient
  ) { }

  private apiUrl: string  = environment.apiUrl + '/pet';

  public selectAllPets(): Observable<Pet>{
    return this.http.get<Pet>(this.apiUrl + '/');
  }

  public getByRace(id: number): Observable<Pet[]> {
    let url = this.apiUrl + 'race/' + id;
    return this.http.get<Pet[]>(url);
  }
}
