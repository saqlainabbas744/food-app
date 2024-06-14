import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private apiUrl = 'https://dummyjson.com/recipes';
  // private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getFoodItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
