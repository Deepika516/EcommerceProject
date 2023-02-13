import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  constructor(private http: HttpClient) {}

  onsignUp(
    firstName: string,
    lastName: string,
    gen: string,
    email: string,
    pass: string
  ): Observable<IUser[]> {
    debugger;
    return this.http.post<IUser[]>('http://localhost:3002/signup', {
      first_name: firstName,
      last_name: lastName,
      gender: gen,
      email: email,
      password: pass,
    });
  }

  onLogin(): Observable<IUser[]> {
    this.isLoggedIn = true;
    return this.http.get<IUser[]>('http://localhost:3002/login');
  }

  isAuthenticated() {
    debugger;
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn), 800;
      });
    });
    return promise;
  }
}
