import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Category } from './category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}
  // this is the data rest url
  private baseUrl = 'http://localhost:8080/categories';
  // this url is for all other methods
  private baseUrl2 = 'http://localhost:8080/category';

  getAllCategories(){
    return this.http
    .get<GetResponse>(this.baseUrl)
    .pipe(map((res) => res._embedded.categories));
  }

  getCategoryById(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

}

interface GetResponse {
  _embedded: {
    categories: Category[];
  }
}