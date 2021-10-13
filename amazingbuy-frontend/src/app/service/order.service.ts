import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:8080/order';
  private baseUrl2 = 'http://localhost:8080/orders';
}
