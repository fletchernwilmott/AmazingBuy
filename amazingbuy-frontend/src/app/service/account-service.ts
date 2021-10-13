import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Account } from './account';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  // URL 1 is for Data REST AKA all get methods
  private baseUrl1 = 'http://localhost:8080/account';
  // URL 2 is for all other methods
  private baseUrl2 = 'http://localhost:8080/accounts';

  getAccountById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl1}/${id}`);
  }

  createAcccount(account: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl2}`, account);
  }

  updateAccount(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl2}/${id}`, value);
  }

  getAllAccounts(): Observable<Account[]> {
    return this.http
      .get<GetResponse>(this.baseUrl1)
      .pipe(map((res) => res._embedded.accounts));
  }
}

interface GetResponse {
  _embedded: {
    accounts: Account[];
  };
}
