import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  private apiUrl: string = environment.apiUrl + '/category';

  public selectAllCategorys(): Observable<Category> {
    return this.http.get<Category>(this.apiUrl + '/');
  }
}
