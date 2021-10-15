import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from './category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}
  private baseUrl = 'http://localhost:8080/categories';
  private baseUrl2 = 'http://localhost:8080/category';

  getAllCategories(): Observable<Category[]> {
    return this.http
      .get<GetCategories>(this.baseUrl)
      .pipe(map((res) => res._embedded.categories));
  }
}

interface GetCategories {
  _embedded: {
    categories: Category[];
  };
}
