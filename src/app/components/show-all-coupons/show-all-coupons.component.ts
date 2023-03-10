import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ICoupon } from 'src/app/interfaces/coupon.interface';
import { CouponsService } from 'src/app/services/coupons.service';

@Component({
  selector: 'app-show-all-coupons',
  templateUrl: './show-all-coupons.component.html',
  styleUrls: ['./show-all-coupons.component.css'],
})
export class ShowAllCouponsComponent implements OnInit {
  allCoupons: ICoupon[] = [];
  constructor(private couponService: CouponsService, private router: Router) {}
  ngOnInit(): void {
    this.readAllCoupons();
  }

  readAllCoupons() {
    this.couponService
      .ViewAllCoupons()
      .pipe(take(1))
      .subscribe((coupons: ICoupon[]) => {
        this.allCoupons = coupons;
      });
  }
}
