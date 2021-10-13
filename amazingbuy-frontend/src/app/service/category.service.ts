import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}
  private baseUrl = 'http://localhost:8080/categories';
  private baseUrl2 = 'http://localhost:8080/category';
}
