import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:8080/account';
  private baseUrl2 = 'http://localhost:8080/accounts';

  getAccountById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createAcccount(account: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl2}`, account);
  }

  updateAccount(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl2}/${id}`, value);
  }

  getAllAccounts(): Observable<Account[]> {
    // return this.http.get(`${this.baseUrl}`);
    return this.http
      .get<GetResponse>(this.baseUrl)
      .pipe(map((res) => res._embedded.accounts));
  }

  getAccountByEmailNPassword(
    email: string,
    password: string
  ): Observable<Object> {
    const uri = `${this.baseUrl}/search/getOne?email=${email}&password=${password}`;
    return this.http.get(uri);
  }
}
interface GetResponse {
  _embedded: {
    accounts: Account[];
  };
  // _links: {
  //   order: Account[];
  // };
}