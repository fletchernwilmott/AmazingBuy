import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account';
import { map } from 'rxjs/operators';
import { SignedAccount } from './signed-account';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:8080/account';
  private baseUrl2 = 'http://localhost:8080/api/accounts';
  private authUrl = 'http://localhost:8080/auth';

  signUp(account: Object): Observable<Object> {
    return this.http.post(`${this.authUrl}/signup`, account);
  }

  signIn(account: Object): Observable<SignedAccount> {
    console.log(account);
    return this.http.post<SignedAccount>(`${this.authUrl}/signin`, account);
  }

  getAccountById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl2}/${id}`);
  }

  createAccount(account: Object): Observable<Object> {
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
  ): Observable<Account> {
    // const uri = `${this.baseUrl}/search/getOne?email=${email}&password=${password}`;
    const uri = `${this.baseUrl2}/${email}/${password}`;
    return this.http.get<Account>(uri).pipe(map((res) => res));
  }
}
interface GetResponse {
  _embedded: {
    accounts: Account[];
  };
  account: Account;
  // _links: {
  //   order: Account[];
  // };
}
