import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  getToken(): any {
    return sessionStorage.getItem('token');
  }

  setSignedAccount(id: number, token: string) {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('id', `${id}`);
  }

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('id');
  }

  isUserLoggedIn() {
    let token = sessionStorage.getItem('token');
    if (token === null) return false;
    return true;
  }
}
