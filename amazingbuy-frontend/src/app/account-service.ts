import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

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

    getAllAccounts(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }

    // getAccountList(id:number): Observable<Account[]> {
    //     const uri=this.baseUrl+"search/findByCategoryId?id="+id;
    //    return this.httpClient.get<GetResponse>(uri).pipe(map(res=>res._embedded.products));
    // }
  
    // interface GetResponse {
    //     "_embedded":{
    //       "products":Product[]
    //     }
    //   }

}
