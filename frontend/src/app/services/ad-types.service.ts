import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdTypesService {

  constructor(private http: HttpClient) { }

  private apiUrl: String = environment.apiUrl + '/';
}
