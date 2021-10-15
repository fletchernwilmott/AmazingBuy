import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { map } from 'rxjs/operators';
import { NullTemplateVisitor } from '@angular/compiler';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:8080/product';
  private baseUrl2 = 'http://localhost:8080/products';
  //get list of products by category id
  findByCategoryId(id: number): Observable<Product[]> {
    const uri = `${this.baseUrl}/search/findByCategoryId?id=${id}`;
    return this.http
      .get<GetProducts>(uri)
      .pipe(map((res) => res._embedded.products));
  }
  //get list of products by name or name containing
  findByNameContaining(name: string): Observable<Product[]> {
    const uri = `${this.baseUrl}/search/findByNameContaining?name=${name}`;
    return this.http
      .get<GetProducts>(uri)
      .pipe(map((res) => res._embedded.products));
  }
  //get list of products by order id
  findByOrdersId(id: number): Observable<Product[]> {
    const uri = `${this.baseUrl}/search/findByOrdersId?id=${id}`;
    return this.http
      .get<GetProducts>(uri)
      .pipe(map((res) => res._embedded.products));
  }
  getAllProducts(): Observable<Product[]> {
    return this.http
      .get<GetProducts>(this.baseUrl)
      .pipe(map((res) => res._embedded.products));
  }
  findProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl2}/${id}`);
  }
  updateProduct(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl2}/${id}`, value);
  }
}

interface GetProducts {
  _embedded: {
    products: Product[];
  };
}
