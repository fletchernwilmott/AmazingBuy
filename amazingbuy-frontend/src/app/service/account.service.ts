import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account';
import { map } from 'rxjs/operators';
import { Order } from './order';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  private signedAccount!:Account;

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

  getAccountByEmailAndPassword(
    email: string,
    password: string
  ): Observable<Account> {
    // const uri = `${this.baseUrl}/search/getOne?email=${email}&password=${password}`;
    const uri = `${this.baseUrl2}/${email}/${password}`;
    return this.http.get<Account>(uri).pipe(map((res) => res));
  }

  getOrdersByAccountId(id:number):void {

  }


  getSignedAccount(): Account{
    return this.signedAccount;
  }

  setSignedAccount(account:Account): void{
    this.signedAccount = account;
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
