import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order';
import { map } from 'rxjs/operators';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:8080/order';
  private baseUrl2 = 'http://localhost:8080/orders';
  findByAccountId(id: number): Observable<Order[]> {
    const uri = `${this.baseUrl}/search/findByAccountId?id=${id}`;
    return this.http
      .get<GetOrders>(uri)
      .pipe(map((res) => res._embedded.orders));
  }
  createOrder(order: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl2}`, order);
  }
  updateOrder(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl2}/${id}`, value);
  }
  cancelOrder(id: number) {
    return this.http.delete(`${this.baseUrl2}/${id}`);
  }
  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl2);
  }
  getOrderById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}

interface GetOrders {
  _embedded: {
    orders: Order[];
  };
}
