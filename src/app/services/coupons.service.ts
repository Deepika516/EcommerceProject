import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ICoupon } from '../interfaces/coupon.interface';

@Injectable({
  providedIn: 'root',
})
export class CouponsService {
  constructor(private http: HttpClient, private routor: Router) {}

  ViewAllCoupons(): Observable<ICoupon[]> {
    return this.http.get<ICoupon[]>('http://localhost:3007/allCoupons');
  }
}
