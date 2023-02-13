import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AutherizationService {
  isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  constructor(private router: Router) {}

  get IsLoggedIn() {
    return this.isUserLoggedIn.asObservable();
  }

  login(cu: IUser) {
    debugger;
    if (cu.email !== '' && cu.password !== '') {
      this.isUserLoggedIn.next(true);
      this.router.navigate(['/allProducts']);
    }
    // debugger;
    // if (cu.email !== 'admin123@gmail.com' && cu.password !== 'admin123') {
    //   this.isUserLoggedIn.next(true);
    //   this.router.navigate(['/products']);
    // }
  }
  adminLogin(admin: IUser) {
    if (admin.email !== 'admin123@gmail.com' && admin.password !== 'admin123') {
      this.isUserLoggedIn.next(true);
      this.router.navigate(['/product']);
    }
  }
  logout() {
    this.isUserLoggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
