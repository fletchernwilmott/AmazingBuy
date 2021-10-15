import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { map } from 'rxjs/operators';

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
<<<<<<< HEAD

  getAllProducts(): Observable<Product[]>{
=======
  getAllProducts(): Observable<Product[]> {
>>>>>>> 6163c9c127987b4eb9379dfa890f98919849c3a5
    return this.http
      .get<GetProducts>(this.baseUrl)
      .pipe(map((res) => res._embedded.products));
  }
<<<<<<< HEAD

  getProductById(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl2}/${id}`).pipe(map(res => res));
  }

  updateProduct(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.baseUrl2}/${id}`, value);
  }

  // createAcccount(account: Object): Observable<Object> {
  //   return this.http.post(`${this.baseUrl2}`, account);
  // }
=======
  findProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl2}/${id}`);
  }
>>>>>>> 6163c9c127987b4eb9379dfa890f98919849c3a5
}

interface GetProducts {
  _embedded: {
    products: Product[];
  };
}
