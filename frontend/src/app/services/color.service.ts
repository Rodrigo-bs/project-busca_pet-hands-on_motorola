import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Color } from '../models/Color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(
    private http: HttpClient
  ) { }

  private apiUrl: string = environment.apiUrl + '/color';

  public selectAllColors(): Observable<Color> {
    return this.http.get<Color>(this.apiUrl + '/');
  }
}
